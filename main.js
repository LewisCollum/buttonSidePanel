let panel = new cpanel.ButtonPanel("panel")
panel.buttonStyle = "PanelButton"
panel.panelStyle = "Panel"
panel.appendToParent(document.getElementById("container"))

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
