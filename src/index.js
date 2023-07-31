import renderTasks from "./modules/render-tasks"
import taskFactory from "./modules/tasks-factory"

const tasksDisplayTab = document.querySelector(".tasks-display")
const addBtnForm = document.getElementById("formBtn")
const navSwitchBtns = document.querySelectorAll("[data-nav-switch]")
const datePicker = document.getElementById("dueDate")



const tasks = []


datePicker.min = new Date().toLocaleDateString('fr-ca')
datePicker.value = new Date().toLocaleDateString('fr-ca')



addBtnForm.addEventListener("click", (e) => {
    e.preventDefault

    const movie = taskFactory()
    tasks.push(movie)

    document.querySelector("form").reset()

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