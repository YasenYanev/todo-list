import parseISO from "date-fns/parseISO"
import lightFormat from "date-fns/lightFormat"

function getSelectedPriority() {
    const priorityButtons = document.getElementsByName("priority")

    for (let index = 0; index < priorityButtons.length; index++) {
        if (priorityButtons[index].checked) {
            return priorityButtons[index].value
        }
    }
}

export default () => {
    return {
        title: document.getElementById("taskTitle").value,
        dueDateValue: document.getElementById("dueDate").value,
        dueDate: lightFormat(parseISO(document.getElementById("dueDate").value), "dd.MM.yyyy"),
        view: document.querySelector(".tasks-display").dataset.view,
        priority: getSelectedPriority()
    }
}