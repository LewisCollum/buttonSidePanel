class ButtonCategory {
    constructor(name, element) {
        this.name = name
        this.element = element
    }

    appendToParent(parent) {
        parent.appendChild(this.makeHeader())
        parent.appendChild(this.element)
    }

    makeHeader() {
        let header = document.createElement('p')
        header.innerHTML = this.name
        return header
    }
    
    addButton(name, type) {        
        let input = this.makeButton(name, type)
        let label = this.makeLabelFor(name, input.id)

        this.element.appendChild(input)
        this.element.appendChild(label)        
    }
    
    makeButton(name, type) {
        let button = document.createElement('input')
        button.type = type
        button.value = name
        button.name = `${this.name}-Button`
        button.id = `${this.name}-${name}`
        return button
    }

    makeLabelFor(text, id) {
        let label = document.createElement('label')
        label.innerHTML = text
        label.setAttribute("for", id)
        return label
    }
}
