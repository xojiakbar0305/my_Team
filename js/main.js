let togglerButton = document.querySelector('.toggler-button')
let siteHeaderWrapper = document.querySelector('.site-header__wrapper')
let closeButton = document.querySelector('.close-button')
///open menu
togglerButton.addEventListener('click', () => {
  siteHeaderWrapper.classList.toggle('open--toggle')
  closeButton.classList.add('close--manu')
  togglerButton.classList.add('close--menu')
})

//close menu
closeButton.addEventListener ('click', () => {
  siteHeaderWrapper.classList.toggle('open--toggle')
  closeButton.classList.remove('close--manu')
  togglerButton.classList.remove('close--menu')
})