import parseISO from "date-fns/parseISO"
import lightFormat from "date-fns/lightFormat"

function getCheckedBtn() {
    const btns = document.getElementsByName("priority")
    for(let i = 0; i < btns.length; i++) {
        if (btns[i].checked) {
            return btns[i].value
        }
    }
}

export default () => {
    return {
        title: document.getElementById("taskTitle").value,
        dueDate: lightFormat(parseISO(document.getElementById("dueDate").value), "dd.MM.yyyy"),
        cssClass: document.querySelector(".tasks-display").classList[1],
        priority: getCheckedBtn()
    }
}