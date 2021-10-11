const boxes = document.querySelectorAll('.box')

// Event Listener on Window Object
window.addEventListener('scroll', checkBoxes)

// For the initial 2 boxes to appear
checkBoxes()

function checkBoxes() {
    // Trigger point for the next box to slide in - 80% of the window height
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // Get the position of the box top
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}