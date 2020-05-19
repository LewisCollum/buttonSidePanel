var cpanel = cpanel || {};

(function(context) {
    context.Panel = class {
        constructor(name) {
            this.panel = document.createElement("form")
            this.panel.addEventListener('click', (event) => event.stopPropagation())
            this.categories = []
        }

        set width(value) {
            this.panel.style.width = value
        }

        set style(styleName) {
            this.panel.className = styleName
        }
        
        appendToParent(parent) {
            parent.appendChild(this.panel)
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
