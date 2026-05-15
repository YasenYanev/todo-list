import renderUpdates from "./modules/render-updates"
import { showForm, hideForm, getSelectedPriority } from "./modules/form-utils"
import { loadData, saveData } from "./modules/storage"

import lightFormat from "date-fns/lightFormat"
import "./styles.css"
import githubIcon from "./assets/github-mark.svg"


// View logic
const pageViews = {
  "today.html": "today",
  "this-week.html": "this-week",
  "this-month.html": "this-month",
  "this-quarter.html": "this-quarter",
  "this-year.html": "this-year",
}

const currentPage =
  window.location.pathname.split("/").pop() || "index.html"

const currentView =
  pageViews[currentPage] || "inbox"


// DOM
const datePicker = document.getElementById("dueDate")
const forms = document.querySelectorAll("form")


// Data
const tasks = loadData("tasks")
const projects = loadData("projects")


// Set minimum date
if (datePicker) {
  datePicker.min = lightFormat(new Date(), "yyyy-MM-dd")
}


// Forms logic
forms.forEach((form, index) => {
  const type = form.dataset.type

  const openBtn =
    document.querySelectorAll("[data-add-form]")[index]

  const addBtn =
    form.querySelector("[data-add]")

  const closeBtn =
    form.querySelector("[data-close]")


  // OPEN FORM
  openBtn?.addEventListener("click", () => {
    showForm(form, openBtn)
  })


  // ADD ITEM
  addBtn?.addEventListener("click", (e) => {
    e.preventDefault()

    if (type === "task") {
      tasks.push({
        title: document.getElementById("taskTitle").value,
        dueDate: document.getElementById("dueDate").value,
        priority: getSelectedPriority()
      })
    }else if (type === "project") {
      projects.push({
        title: document.getElementById("projectTitle").value
      })
    }

    saveData("tasks", tasks)
    saveData("projects", projects)

    renderUpdates(tasks, projects, currentView)

    hideForm(form, openBtn)
  })


  // CLOSE FORM
  closeBtn?.addEventListener("click", () => {
    hideForm(form, openBtn)
  })
})


// Initial render
renderUpdates(tasks, projects, currentView)


// Footer icon
document.addEventListener("DOMContentLoaded", () => {
  const footerIcon = document.getElementById("footer-icon")

  if (footerIcon) {
    footerIcon.src = githubIcon
  }
})