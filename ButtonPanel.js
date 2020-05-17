class ButtonPanel {
    constructor(name, styleName) {
        this.panel = document.createElement("form")
        this.panel.addEventListener('click', (event) => event.stopPropagation())
        
        this.openButton = document.createElement("button")        
        this.openButton.addEventListener('click', (event) => {
            event.stopPropagation()
            this.panel.style.width = "100px"
        })
        document.addEventListener('click', () => this.panel.style.width = "0")
        this.openButton.innerHTML = "&#9776;"
    }

    set buttonStyle(styleName) {
        this.openButton.className = styleName
    }

    set panelStyle(styleName) {
        this.panel.className = styleName
    }
        
    appendToParent(parent) {
        parent.appendChild(this.panel)
        parent.appendChild(this.openButton)
    }

    addCategory(category) {
        category.appendToParent(this.panel)
    }
}
