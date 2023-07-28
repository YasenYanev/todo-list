import renderTasks from "./modules/render-tasks"
import taskFactory from "./modules/tasks-class"
import add from 'date-fns/add'


const tasksDisplayTab = document.querySelector(".tasks-display")
const addBtnForm = document.getElementById("formBtn")
const navSwitchBtns = document.querySelectorAll("[data-nav-switch]")

const tasks = []

function getCheckedBtn() {
    const btns = document.getElementsByName("priority")
    for(let i = 0; i < btns.length; i++) {
        if (btns[i].checked) {
            return btns[i].value
        }
    }
}

addBtnForm.addEventListener("click", (e) => {
    e.preventDefault
    const movie = new taskFactory(document.getElementById("taskTitle").value, document.getElementById("taskDescription").value, add(new Date, {
        days:1
    }), getCheckedBtn(), tasksDisplayTab.classList[1])
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