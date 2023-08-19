import renderTasks from "./modules/render-tasks"
import taskFactory from "./modules/tasks-factory"
import lightFormat from "date-fns/lightFormat"

const tasksDisplayTab = document.querySelector(".tasks-display")
const navSwitchBtns = document.querySelectorAll("[data-nav-switch]")
const datePicker = document.getElementById("dueDate")
const forms = document.querySelectorAll("form")
const addFormBtns = document.querySelectorAll("[data-add-form]")
const addBtns = document.querySelectorAll("[data-add]")
const closeBtns = document.querySelectorAll("[data-close]")

const tasks = []

datePicker.min = lightFormat(new Date(), "yyyy-MM-dd")

// Event listeners
for (let i = 0; i < forms.length; i++) {
	addFormBtns[i].addEventListener("click", () => {
    		addFormBtns[i].style.display = "none"
    		forms[i].style.display = "grid"
	})
	addBtns[i].addEventListener("click", (e) => {
    		e.preventDefault

    		const task = taskFactory()
    		tasks.push(task)

    		forms[i].reset()
    		renderTasks(tasksDisplayTab, tasks)

    		addFormBtns[i].style.display = "block"
    		forms[i].style.display = "none"
    		console.log(tasks)
	})
	closeBtns[i].addEventListener("click", () => {
    		forms[i].reset()

    		addFormBtns[i].style.display = "block"
    		forms[i].style.display = "none"
	})
	
}

navSwitchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.textContent === tasksDisplayTab.classList[1].replace(/-/g," ")) return

        tasksDisplayTab.className = "tasks-display"
        tasksDisplayTab.classList.add(btn.innerHTML.replace(/ /g,"-"))

        navSwitchBtns.forEach(btn => btn.classList.remove("active"))
        btn.classList.toggle("active")

        renderTasks(tasksDisplayTab, tasks)
    })
})

renderTasks(tasksDisplayTab, tasks)