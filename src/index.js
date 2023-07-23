import taskDisplayRenderer from "./modules/render-tasks"
import taskFactory from "./modules/tasks-factory"

const addBtn = document.getElementById("formBtn")
const inboxBtn = document.getElementById("inboxBtn")
const todayBtn = document.getElementById("todayBtn")
const thisWeekBtn = document.getElementById("thisWeekBtn")

const tasks = []

addBtn.addEventListener("click", (e) => {
    e.preventDefault
    const movie = new taskFactory(document.getElementById("taskTitle").value, 
    document.getElementById("taskDescription").value)
    tasks.push(movie)
    document.querySelector("form").reset()

    taskDisplayRenderer(tasks)
})
