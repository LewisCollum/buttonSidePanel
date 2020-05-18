var cpanel = cpanel || {};

(function(context) {
    context.ButtonPanel = class {
        constructor(name, styleName) {
            this.panel = document.createElement("form")
            this.panel.addEventListener('click', (event) => event.stopPropagation())
            this.categories = []
            
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
            this.categories.push(category)
            category.appendToParent(this.panel)
        }

        addButtonChangeListener(listener) {
            this.panel.addEventListener('change', (event) => {
                let change = {}
                this.categories.forEach((category) => {
                    let property = category.asProperty()
                    change[property.key] = property.value
                })
                listener(change)
            })
        }
    }
})(cpanel)
