export default class {
    constructor(title, description, cssClass) {
        this.title = title
        this.description = description
        this.cssClass = cssClass
        this.dueDate
        this.priority
    }

    addDueDate(dueDate) {
        this.dueDate = dueDate
    }

    addPriority(priority) {
        this.priority = priority
    }
}