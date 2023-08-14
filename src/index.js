import renderTasks from "./modules/render-tasks"
import taskFactory from "./modules/tasks-factory"
import lightFormat from "date-fns/lightFormat"

const tasksDisplayTab = document.querySelector(".tasks-display")
const navSwitchBtns = document.querySelectorAll("[data-nav-switch]")
const datePicker = document.getElementById("dueDate")
const addTaskFormBtn = document.getElementById("addTaskBtn")
const form = document.querySelector("form")
const addBtnForm = document.getElementById("formBtn")


const tasks = []


datePicker.min = lightFormat(new Date(), "yyyy-MM-dd")
datePicker.value = lightFormat(new Date(), "yyyy-MM-dd")

addTaskFormBtn.addEventListener("click", () => {
    addTaskFormBtn.style.display = "none"
    form.style.display = "grid"
})

addBtnForm.addEventListener("click", (e) => {
    e.preventDefault

    const movie = taskFactory()
    tasks.push(movie)

    form.reset()
    renderTasks(tasksDisplayTab, tasks)

    addTaskFormBtn.style.display = "block"
    form.style.display = "none"
    console.log(tasks)
})

document.getElementById("closeformBtn").addEventListener("click", () => {
    form.reset()

    addTaskFormBtn.style.display = "block"
    form.style.display = "none"
})

navSwitchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        tasksDisplayTab.className = "tasks-display"
        tasksDisplayTab.classList.add(btn.innerHTML.replace(/ /g,"-"))

        renderTasks(tasksDisplayTab, tasks)
    })
})

renderTasks(tasksDisplayTab, tasks)