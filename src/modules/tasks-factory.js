export default () => {
    function getCheckedBtn() {
        const btns = document.getElementsByName("priority")
        for(let i = 0; i < btns.length; i++) {
            if (btns[i].checked) {
                return btns[i].value
            }
        }
    }
    return {
        title: document.getElementById("taskTitle").value,
        description: document.getElementById("taskDescription").value,
        dueDate: document.getElementById("dueDate").value,
        cssClass: document.querySelector(".tasks-display").classList[1],
        priority: getCheckedBtn()
    }
}