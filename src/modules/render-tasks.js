import elementFromTemplate from "./html-elements-factory"
import add from "date-fns/add"
import parseISO from "date-fns/parseISO"
import isFuture from "date-fns/isFuture"

const tasksWrapper = document.querySelector(".tasks-wrapper")


function checkDueDate(tasksArr, task) {
    if (isFuture(add(parseISO(task.dueDate), {hours: 23, minutes: 59, seconds:59})) === false) {
        tasksArr.pop(task) 
        return false
   }
}

export default (displayTab, tasksArr) => {
    tasksWrapper.innerHTML = ""
    tasksArr.slice().reverse().forEach(task => {
        // if(checkDueDate(tasksArr, task) === false) return

        tasksWrapper.appendChild(elementFromTemplate(`
        <div class="task ${task.cssClass}">
            <div class="task-title">
            ${task.title}
            </div>
            <div class="task-description">
            ${task.dueDate}
            </div>
        </div>
        `))
    })
    if (displayTab.classList[1] == "Inbox") return

    document.querySelectorAll(`.task`).forEach(task => {
        task.style.display = "none"
    })
    document.querySelectorAll(`.${displayTab.classList[1]}`).forEach(task => {
         task.style.display = "block"
    })
}