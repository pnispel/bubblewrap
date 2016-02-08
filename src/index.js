// Accept hot module reloading
if (module.hot) {
  module.hot.accept()
}

const blueOrRed = () => {
  const random = Math.random()
  return random > 0.5 ? 'rgb(42, 63, 184)' : 'rgb(223, 60, 60)'
}

const div = document.getElementById('color')
const button = document.getElementById('button')
const changeColor = () => div.style.backgroundColor = blueOrRed()

button.addEventListener('click', changeColor)
