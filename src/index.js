import renderTasks from "./modules/render-tasks"
import taskFactory from "./modules/tasks-class"


const tasksDisplayTab = document.querySelector(".tasks-display")
const addBtnForm = document.getElementById("formBtn")
const navSwitchBtns = document.querySelectorAll("[data-nav-switch]")

const tasks = []

addBtnForm.addEventListener("click", (e) => {
    e.preventDefault
    const movie = new taskFactory(document.getElementById("taskTitle").value, document.getElementById("taskDescription").value)
    tasks.push(movie)
    document.querySelector("form").reset()

    renderTasks(tasksDisplayTab, tasks)
})

navSwitchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        tasksDisplayTab.className = "tasks-display"
        tasksDisplayTab.classList.add(btn.innerHTML.replace(/ /g,"-"))
    })
})


renderTasks(tasksDisplayTab, tasks)