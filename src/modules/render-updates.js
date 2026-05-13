import elementFromTemplate from "./html-elements-factory"
import parseISO from "date-fns/parseISO"
import parse from "date-fns/parse"
import isSameDay from "date-fns/isSameDay"
import isSameMonth from "date-fns/isSameMonth"
import isSameYear from "date-fns/isSameYear"
import isWithinInterval from "date-fns/isWithinInterval"
import startOfWeek from "date-fns/startOfWeek"
import endOfWeek from "date-fns/endOfWeek"
import lightFormat from "date-fns/lightFormat"

const tasksWrapper = document.getElementById("tasksWrapper")

const viewMatchers = {
    inbox: () => true,
    today: (taskDate) => isSameDay(taskDate, new Date()),
    "this-week": (taskDate) => isWithinInterval(taskDate, {
        start: startOfWeek(new Date(), { weekStartsOn: 1 }),
        end: endOfWeek(new Date(), { weekStartsOn: 1 }),
    }),
    "this-month": (taskDate) => isSameMonth(taskDate, new Date()),
    "this-year": (taskDate) => isSameYear(taskDate, new Date()),
}

function getTaskDate(task) {
    if (task.dueDate) {
        const isoDate = parseISO(task.dueDate)

        if (!Number.isNaN(isoDate.getTime())) {
            return isoDate
        }

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
        return false
    }

    const matcher = viewMatchers[currentView]
    return matcher ? matcher(taskDate) : false
}

function getTaskDateLabel(task) {
    if (!task.dueDate) {
        return ""
    }

    const parsedDate = getTaskDate(task)

    if (!parsedDate) {
        return task.dueDate
    }

    return lightFormat(parsedDate, "dd.MM.yyyy")
}

const renderTasks = (tasksArr, currentView) => {
    localStorage.setItem("tasks", JSON.stringify(tasksArr))

    tasksWrapper.innerHTML = ""
    const visibleTasks = tasksArr.slice().reverse().filter(task => isTaskVisible(task, currentView))

    visibleTasks.forEach(task => {
        tasksWrapper.appendChild(elementFromTemplate(`
        <div class="task">
            <div class="task-title">
            ${task.title}
            </div>
            <div class="task-description">
            ${getTaskDateLabel(task)}
            </div>
        </div>
        `))
    })
}

const projectWrapper = document.getElementById("projectsWrapper")

const renderProjects = (projectsArr) => {
    projectWrapper.innerHTML = ""
    localStorage.setItem("projects", JSON.stringify(projectsArr))
    projectsArr.forEach(project => {
        projectWrapper.appendChild(elementFromTemplate(`
        <button type="button">${project.title}</button>
        `))
    })
}

export default (tasksArr, projectsArr, currentView) => {
    renderTasks(tasksArr, currentView)
    renderProjects(projectsArr)
}