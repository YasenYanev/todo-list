import elementFromTemplate from "./html-elements-factory"

import parseISO from "date-fns/parseISO"
import parse from "date-fns/parse"

import isSameDay from "date-fns/isSameDay"
import isSameMonth from "date-fns/isSameMonth"
import isSameQuarter from "date-fns/isSameQuarter"
import isSameYear from "date-fns/isSameYear"

import isWithinInterval from "date-fns/isWithinInterval"
import startOfWeek from "date-fns/startOfWeek"
import endOfWeek from "date-fns/endOfWeek"

import lightFormat from "date-fns/lightFormat"


// DOM elements
const tasksWrapper = document.getElementById("tasksWrapper")
const projectsWrapper = document.getElementById("projectsWrapper")


// View filters
const viewMatchers = {
  inbox: () => true,

  today: (date) =>
    isSameDay(date, new Date()),

  "this-week": (date) =>
    isWithinInterval(date, {
      start: startOfWeek(new Date(), {
        weekStartsOn: 1,
      }),

      end: endOfWeek(new Date(), {
        weekStartsOn: 1,
      }),
    }),

  "this-month": (date) =>
    isSameMonth(date, new Date()),

  "this-quarter": (date) =>
    isSameQuarter(date, new Date()),

  "this-year": (date) =>
    isSameYear(date, new Date()),
}


// Convert task date string → Date object
function getTaskDate(task) {
  if (!task.dueDate) {
    return null
  }

  // Try ISO format first
  const isoDate = parseISO(task.dueDate)

  if (!Number.isNaN(isoDate.getTime())) {
    return isoDate
  }

  // Fallback format: dd.MM.yyyy
  return parse(
    task.dueDate,
    "dd.MM.yyyy",
    new Date()
  )
}


// Check if task should appear in current view
function isTaskVisible(task, currentView) {
  if (currentView === "inbox") {
    return true
  }

  const taskDate = getTaskDate(task)

  if (!taskDate) {
    return false
  }

  const matcher = viewMatchers[currentView]

  return matcher ? matcher(taskDate) : false
}


// Format task date for display
function formatTaskDate(task) {
  const taskDate = getTaskDate(task)

  if (!taskDate) {
    return ""
  }

  return lightFormat(taskDate, "dd.MM.yyyy")
}


// Create task HTML element
function createTaskElement(task) {
  const priorityClass = task.priority
    ? `priority-${task.priority.toLowerCase()}`
    : ""

  return elementFromTemplate(`
    <div class="task ${priorityClass}">
      <div class="task-title">
        ${task.title}
      </div>

      <div class="task-date">
        ${formatTaskDate(task)}
      </div>
    </div>
  `)
}


// Render tasks
function renderTasks(tasksArr, currentView) {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasksArr)
  )

  tasksWrapper.innerHTML = ""

  const visibleTasks = tasksArr
    .slice()
    .reverse()
    .filter(task =>
      isTaskVisible(task, currentView)
    )

  visibleTasks.forEach(task => {
    tasksWrapper.appendChild(
      createTaskElement(task)
    )
  })
}


// Render projects
function renderProjects(projectsArr) {
  localStorage.setItem(
    "projects",
    JSON.stringify(projectsArr)
  )

  projectsWrapper.innerHTML = ""

  projectsArr.forEach(project => {
    const projectButton = elementFromTemplate(`
      <button type="button">
        ${project.title}
      </button>
    `)

    projectsWrapper.appendChild(projectButton)
  })
}


// Main render function
export default function renderUpdates(
  tasksArr,
  projectsArr,
  currentView
) {
  renderTasks(tasksArr, currentView)

  renderProjects(projectsArr)
}