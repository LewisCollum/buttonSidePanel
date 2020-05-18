var cpanel = cpanel || {};

(function(context){
    context.RadioButtonCategory = class {
        constructor(name) {
            let element = this.makeRadioListeningButtonList()
            this.category = new cpanel.ButtonCategory(name, element)
            this.selection = null
        }

        makeRadioListeningButtonList() {
            let element = document.createElement('ul')
            element.addEventListener('change', (event) => {
                this.selection = event.target.value
                console.log(event.target.value)
            })
            return element
        }

        appendToParent(parent) {
            this.category.appendToParent(parent)
        }


        addButton(name) {
            let buttonType = 'radio'
            this.category.addButton(name, buttonType)
        }

        turnOnButton(name) {
            this.selection = name
            this.category.turnOnButton(name)
        }

        buttonCurrentlySelected() {
            return this.selection
        }
    }
})(cpanel)
