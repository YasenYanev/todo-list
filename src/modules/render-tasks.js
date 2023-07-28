import elementFromTemplate from "./html-elements-factory"
import isFuture from 'date-fns/isFuture'


export default (displayTab, tasksArr) => {
    const form = displayTab.firstElementChild
    displayTab.innerHTML = ""
    displayTab.appendChild(form)

    tasksArr.forEach(task => {
         if (isFuture(task.dueDate) === false) {
             tasksArr.pop(task) 
             return
        }

        displayTab.appendChild(elementFromTemplate(`
        <div class="task ${task.cssClass}">
            <div class="task-title">
            ${task.title}
            </div>
            <div class="task-description">
            ${task.description}
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