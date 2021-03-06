var cpanel = cpanel || {};

(function(context) {
    context.ToggleButtonCategory = class {
        constructor(name) {
            let element = this.makeToggleListeningButtonList()
            this.category = new context.ButtonCategory(name, element)
            
            this.onButtons = new Set()        
        }

        appendToParent(parent) {
            this.category.appendToParent(parent)
        }

        addButton(name) {
            let buttonType = 'checkbox'
            this.category.addButton(name, buttonType)
        }

        turnOnButton(name) {
            this.onButtons.add(name)
            this.category.turnOnButton(name)        
        }

        makeToggleListeningButtonList() {
            let element = document.createElement('ul')
            element.addEventListener('change', (event) => {
                let buttonName = event.target.value
                let isChecked = document.getElementById(event.target.id).checked
                this.setButtonState(buttonName, isChecked)
            })
            return element
        }
        
        setButtonState(buttonName, isOn) {
            if (isOn)
                this.onButtons.add(buttonName)
            else
                this.onButtons.delete(buttonName)
        }    

        buttonsCurrentlyOn() {
            return this.onButtons
        }

        asProperty() {
            return this.category.makeProperty([...this.onButtons])
        }
    }
})(cpanel)
