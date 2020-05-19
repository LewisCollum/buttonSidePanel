var cpanel = cpanel || {};

(function(context) {
    context.PanelOpenButton = class {
        constructor(panel) {
            this.openButton = document.createElement("button")        
            this.openButton.addEventListener('click', (event) => {
                event.stopPropagation()
                panel.width = "100px"
            })
            document.addEventListener('click', () => panel.width = "0")
            this.openButton.innerHTML = "&#9776;"
        }

        set style(styleName) {
            this.openButton.className = styleName
        }
        
        appendToParent(parent) {
            parent.appendChild(this.openButton)
        }
    }
})(cpanel)
