export default class {
    #visability = "high"
    constructor(title, description) {
        this.title = title
        this.description = description
        this.dueDate
        this.priority
    }

    addDueDate(dueDate) {
        this.dueDate = dueDate
    }

    addPriority(priority) {
        this.priority = priority
    }

    get Visability() {
        return this.#visability
    }
}