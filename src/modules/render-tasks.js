import elementFromTemplate from "./html-elements-factory"
import isFuture from "date-fns/isFuture"
import parseISO from 'date-fns/parseISO'


function checkDueDate(tasksArr, task) {
    if (isFuture(parseISO(task.dueDate)) === false) {
        tasksArr.pop(task) 
        return false
   }
}


export default (displayTab, tasksArr) => {
    const form = displayTab.firstElementChild
    displayTab.innerHTML = ""
    displayTab.appendChild(form)

    tasksArr.forEach(task => {

        if(checkDueDate(tasksArr, task) === false) return

        displayTab.appendChild(elementFromTemplate(`
        <div class="task ${task.cssClass}">
            <div class="task-title">
            ${task.title}
            </div>
            <div class="task-description">
            ${task.description}
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