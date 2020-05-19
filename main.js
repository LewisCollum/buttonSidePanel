let panel = new cpanel.Panel("panel")
panel.style = "Panel"
panel.appendToParent(document.getElementById("container"))

let openButton = new cpanel.PanelOpenButton(panel)
openButton.style = "PanelButton"
openButton.appendToParent(document.getElementById("container"))


let annotationCategory = new cpanel.ToggleButtonCategory("Annotation")
annotationCategory.addButton("Foo")
annotationCategory.addButton("Bar")
annotationCategory.addButton("Boo")
annotationCategory.turnOnButton("Boo")
panel.addCategory(annotationCategory)

let frameCategory = new cpanel.RadioButtonCategory("Frame")
frameCategory.addButton("Foo")
frameCategory.addButton("Bar")
frameCategory.turnOnButton("Foo")
panel.addCategory(frameCategory)

panel.addButtonChangeListener((change) => {
    console.log(change)
})
