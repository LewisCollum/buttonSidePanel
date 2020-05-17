class ToggleButtonCategory {
    constructor(name) {
        let element = this.makeToggleListeningButtonList()
        this.category = new ButtonCategory(name, element)
        
        this.onButtons = new Set()        
    }

    appendToParent(parent) {
        this.category.appendToParent(parent)
    }

    addButton(name) {
        let buttonType = 'checkbox'
        this.category.addButton(name, buttonType)
    }

    makeToggleListeningButtonList() {
        let element = document.createElement('ul')
        element.addEventListener('change', (event) => {
            let buttonName = event.target.value
            let isChecked = document.getElementById(event.target.id).checked
            this.setButtonState(buttonName, isChecked)
            console.log(this.onButtons)
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
}
