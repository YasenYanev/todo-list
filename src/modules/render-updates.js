import elementFromTemplate from "./html-elements-factory"
import add from "date-fns/add"
import parseISO from "date-fns/parseISO"
import isFuture from "date-fns/isFuture"

// Render tasks
const tasksWrapper = document.getElementById("tasksWrapper")

function checkDueDate(tasksArr, task) {
    if (isFuture(add(parseISO(task.dueDate), {hours: 23, minutes: 59, seconds:59})) === false) {
        tasksArr.pop(task) 
        return false
   }
}

const renderTasks = (displayTab, tasksArr) => {
    tasksWrapper.innerHTML = ""
    tasksArr.slice().reverse().forEach(task => {
        // Bug with date check:
        // if(checkDueDate(tasksArr, task) === false) return

        tasksWrapper.appendChild(elementFromTemplate(`
        <div class="task ${task.cssClass}">
            <div class="task-title">
            ${task.title}
            </div>
            <div class="task-description">
            ${task.dueDate}
            </div>
        </div>
        `))
    })
    if (displayTab.classList[1] == "Inbox") return

    document.querySelectorAll(`.task`).forEach(task => {
        task.style.display = "none"
    })
    document.querySelectorAll(`.${displayTab.classList[1]}`).forEach(task => {
         task.style.display = "block"
    })
}
// Render Projects
const projectWrapper = document.getElementById("projectsWrapper")

const renderProjects = (projectsArr) => {
    projectWrapper.innerHTML = ""

    projectsArr.forEach(project => {
        projectWrapper.appendChild(elementFromTemplate(`
        <button class="${project.title}" data-nav-switch>${project.title}</button>
        `))
    })
}
// Update navbar button listeners
const updateNavListeners = (displayTab, tasksArr) => {
    let navSwitchBtns = document.querySelectorAll("[data-nav-switch]")

    // Fix problem with .active stlye not getting removed
    navSwitchBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.textContent === displayTab.classList[1].replace(/-/g," ")) return
    
            displayTab.className = "tasks-display"
            displayTab.classList.add(btn.innerHTML.replace(/ /g,"-"))
    
            navSwitchBtns.forEach(btn => btn.classList.remove("active"))
            btn.classList.toggle("active")
    
            renderTasks(displayTab, tasksArr)
        })
    })
}

export default (displayTab, tasksArr, projectsArr) => {
    renderTasks(displayTab, tasksArr)
    renderProjects(projectsArr)
    updateNavListeners(displayTab, tasksArr)
}