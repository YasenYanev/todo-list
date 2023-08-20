import taskFactory from "./modules/tasks-factory"
import projectsFactory from "./modules/projects-factory"
import lightFormat from "date-fns/lightFormat"
import renderUpdates from "./modules/render-updates"

const tasksDisplayTab = document.querySelector(".tasks-display")
const navSwitchBtns = document.querySelectorAll("[data-nav-switch]")
const datePicker = document.getElementById("dueDate")
const forms = document.querySelectorAll("form")
const addFormBtns = document.querySelectorAll("[data-add-form]")
const addBtns = document.querySelectorAll("[data-add]")
const closeBtns = document.querySelectorAll("[data-close]")

const tasks = []
const projects = []

datePicker.min = lightFormat(new Date(), "yyyy-MM-dd")

// Event listeners
for (let i = 0; i < forms.length; i++) {
	addFormBtns[i].addEventListener("click", () => {
    		addFormBtns[i].style.display = "none"
    		forms[i].style.display = "grid"
	})
	addBtns[i].addEventListener("click", (e) => {
    		e.preventDefault
			const buttonIdNum = i

			if (buttonIdNum === 0) {
				const project = projectsFactory()
				projects.push(project)
				console.log(projects)
			} else if (buttonIdNum === 1) {
				const task = taskFactory()
				tasks.push(task)
			}

			renderUpdates(tasksDisplayTab, tasks, projects)
			forms[i].reset()
    		addFormBtns[i].style.display = "block"
    		forms[i].style.display = "none"
	})
	closeBtns[i].addEventListener("click", () => {
    		forms[i].reset()

    		addFormBtns[i].style.display = "block"
    		forms[i].style.display = "none"
	})
	
}

renderUpdates(tasksDisplayTab, tasks, projects)