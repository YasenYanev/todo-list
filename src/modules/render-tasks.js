import elementFromTemplate from "./html-elements-factory"

export default (tasks, visability, page) => {
    tasks.forEach(task => {
        document.querySelector(".tasks-display").appendChild(elementFromTemplate(`
        <div class="task">
            <div class="task-title">
            ${task.title}
            </div>
            <div class="task-description">
            ${task.description}
            </div>
        </div>
        `))
    })
}

// BUG: Rendering 1 task 2 times