let annotationCategory = new ToggleButtonCategory("Annotation")
annotationCategory.addButton("Foo")
annotationCategory.addButton("Bar")
annotationCategory.appendToParent(document.getElementById("panel"))

let frameCategory = new RadioButtonCategory("Frame")
frameCategory.addButton("Foo")
frameCategory.addButton("Bar")
frameCategory.appendToParent(document.getElementById("panel"))


var panel = document.getElementById("panel")
panel.addEventListener('click', (event) => event.stopPropagation())

var cameraPanelButton = document.getElementById("cameraPanelButton")
cameraPanelButton.addEventListener('click', (event) => {
    event.stopPropagation()
    panel.style.width = "100px"
})
document.addEventListener('click', () => panel.style.width = "0")
