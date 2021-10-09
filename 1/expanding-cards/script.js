// pulling-in DOM elements
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    // Wiring up an event listener for click event on each panel
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}