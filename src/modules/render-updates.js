import elementFromTemplate from "./html-elements-factory"
import parseISO from "date-fns/parseISO"
import parse from "date-fns/parse"
import isSameDay from "date-fns/isSameDay"
import isSameMonth from "date-fns/isSameMonth"
import isSameYear from "date-fns/isSameYear"
import isWithinInterval from "date-fns/isWithinInterval"
import startOfWeek from "date-fns/startOfWeek"
import endOfWeek from "date-fns/endOfWeek"

const tasksWrapper = document.getElementById("tasksWrapper")

function getTaskDate(task) {
    if (task.dueDateValue) {
        return parseISO(task.dueDateValue)
    }

    if (task.dueDate) {
        return parse(task.dueDate, "dd.MM.yyyy", new Date())
    }

    return null
}

function isTaskVisible(task, currentView) {
    const taskDate = getTaskDate(task)

    if (currentView === "inbox") {
        return true
    }

    if (!taskDate) {
        return task.view === currentView
    }

    if (currentView === "today") {
        return isSameDay(taskDate, new Date())
    }

    if (currentView === "this-week") {
        return isWithinInterval(taskDate, {
            start: startOfWeek(new Date(), { weekStartsOn: 1 }),
            end: endOfWeek(new Date(), { weekStartsOn: 1 }),
        })
    }

    if (currentView === "this-month") {
        return isSameMonth(taskDate, new Date())
    }

    if (currentView === "this-year") {
        return isSameYear(taskDate, new Date())
    }

    return task.view === currentView
}

const renderTasks = (tasksArr, currentView) => {
    localStorage.setItem("tasks", JSON.stringify(tasksArr))

    tasksWrapper.innerHTML = ""
    tasksArr.slice().reverse().forEach(task => {
        const taskView = task.view || task.cssClass || "inbox"

        tasksWrapper.appendChild(elementFromTemplate(`
        <div class="task ${taskView}">
            <div class="task-title">
            ${task.title}
            </div>
            <div class="task-description">
            ${task.dueDate}
            </div>
        </div>
        `))
    })
    document.querySelectorAll(`.task`).forEach(task => {
        task.style.display = "none"
    })
    const visibleTasks = tasksArr.slice().reverse()

    visibleTasks.forEach((task, index) => {
        if (!isTaskVisible(task, currentView)) {
            return
        }

        const taskElements = document.querySelectorAll(".task")
        const taskElement = taskElements[index]

        if (taskElement) {
            taskElement.style.display = "flex"
        }
    })
}

const projectWrapper = document.getElementById("projectsWrapper")

const renderProjects = (projectsArr) => {
    projectWrapper.innerHTML = ""
    localStorage.setItem("projects", JSON.stringify(projectsArr))
    projectsArr.forEach(project => {
        projectWrapper.appendChild(elementFromTemplate(`
        <button class="project-btn" type="button" data-project-btn data-project-title="${project.title}">${project.title}</button>
        `))
    })
}

export default (tasksArr, projectsArr, currentView) => {
    renderTasks(tasksArr, currentView)
    renderProjects(projectsArr)
}