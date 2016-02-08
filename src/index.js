// Accept hot module reloading during development
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept()
  }
}

const div    = document.getElementById('color')
const button = document.getElementById('button')

const blueOrRed   = () => Math.random() > 0.5 ? 'rgb(42, 63, 184)' : 'rgb(223, 60, 60)'
const changeColor = () => div.style.backgroundColor = blueOrRed()

button.addEventListener('click', changeColor)
