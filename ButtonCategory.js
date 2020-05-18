class ButtonCategory {
    constructor(name, element) {
        this.name = name
        this.element = element
        this.buttons = new Map()
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

    turnOnButton(name) {
        this.buttons[name].checked = true
    }
    
    addButton(name, type) {
        this.buttons[name] = this.makeButton(name, type)
        let label = this.makeLabelFor(name, this.buttons[name].id)

        this.element.appendChild(this.buttons[name])
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
