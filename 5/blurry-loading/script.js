const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// Loading integer value (0-100)
let load = 0

// Repeated 30ms interval function calls
let interval = setInterval(blurring, 30)

function blurring() {
  // in each call increase load by 1
  load++

  // When load gets to 100; stop the blurring
  if (load > 99) {

    clearInterval(interval)
  }

  loadText.innerText = `${load}%`
  // Mapping out opacity of loading text relative to 0-100
  loadText.style.opacity = scale(load, 0, 100, 1, 0)

  // Mapping out blur of the background image relative to 0-100
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

// Mapping in relative to 0-100
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}