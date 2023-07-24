import elementFromTemplate from "./html-elements-factory"

export default (displayTab, tasksArr) => {
    tasksArr.forEach(task => {
        // const defaultState = displayTab.cloneNode(true)
        // displayTab = defaultState
        displayTab.appendChild(elementFromTemplate(`
        <div class="task ${displayTab.classList[1]}">
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
    document.querySelectorAll(`.${displayTab.classList[1]}`).forEach(task => {
        task.style.display = "block"
    })
}

// BUG: Rendering 1 task 2 times