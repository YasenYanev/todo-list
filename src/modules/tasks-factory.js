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
        dueDate: document.getElementById("dueDate").value,
        priority: getSelectedPriority()
    }
}