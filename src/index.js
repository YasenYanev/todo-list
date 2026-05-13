import taskFactory from "./modules/tasks-factory"
import projectsFactory from "./modules/projects-factory"
import lightFormat from "date-fns/lightFormat"
import renderUpdates from "./modules/render-updates"
import "./styles.css"

const currentView = (() => {
	const currentPage = window.location.pathname.split("/").pop() || "index.html"
	const pageViews = {
		"today.html": "today",
		"this-week.html": "this-week",
		"this-month.html": "this-month",
		"this-year.html": "this-year",
	}

	return pageViews[currentPage] || "inbox"
})()

const datePicker = document.getElementById("dueDate")
const forms = document.querySelectorAll("form")
const addFormBtns = document.querySelectorAll("[data-add-form]")
const addBtns = document.querySelectorAll("[data-add]")
const closeBtns = document.querySelectorAll("[data-close]")


let tasks = localStorage.getItem("tasks")
let projects = localStorage.getItem("projects")


// Initialize or parse "tasks"
tasks = tasks ? JSON.parse(tasks) : [];

// Initialize or parse "projects"
projects = projects ? JSON.parse(projects) : [];

datePicker.min = lightFormat(new Date(), "yyyy-MM-dd")

// Event listeners
for (let index = 0; index < forms.length; index++) {
	addFormBtns[index].addEventListener("click", () => {
	    	addFormBtns[index].style.display = "none"
	    	forms[index].style.display = "grid"
	})
	addBtns[index].addEventListener("click", (event) => {
	    	event.preventDefault()

			if (index === 0) {
				const project = projectsFactory()
				projects.push(project)
			} else if (index === 1) {
				const task = taskFactory()
				tasks.push(task)
			}

			renderUpdates(tasks, projects, currentView)
			forms[index].reset()
	    	addFormBtns[index].style.display = "block"
	    	forms[index].style.display = "none"
	})
	closeBtns[index].addEventListener("click", () => {
	    	forms[index].reset()

	    	addFormBtns[index].style.display = "block"
	    	forms[index].style.display = "none"
	})
	
}

renderUpdates(tasks, projects, currentView)