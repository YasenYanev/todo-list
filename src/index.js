import renderTasks from "./modules/render-tasks"
import taskFactory from "./modules/tasks-factory"
import lightFormat from "date-fns/lightFormat"

const tasksDisplayTab = document.querySelector(".tasks-display")
const navSwitchBtns = document.querySelectorAll("[data-nav-switch]")
const datePicker = document.getElementById("dueDate")


const tasks = []

datePicker.min = lightFormat(new Date(), "yyyy-MM-dd")
datePicker.value = lightFormat(new Date(), "yyyy-MM-dd")

const addBtnForm = document.getElementById("formBtn")

addBtnForm.addEventListener("click", (e) => {
    e.preventDefault

    const movie = taskFactory()
    tasks.push(movie)

    document.querySelector("form").reset()
    console.log(tasks)
    renderTasks(tasksDisplayTab, tasks)
})

navSwitchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        tasksDisplayTab.className = "tasks-display"
        tasksDisplayTab.classList.add(btn.innerHTML.replace(/ /g,"-"))

        renderTasks(tasksDisplayTab, tasks)
    })
})

renderTasks(tasksDisplayTab, tasks)