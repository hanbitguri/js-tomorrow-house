const myMenuButton = document.querySelector('.my-menu .my-menu-button')
const myMenu = document.querySelector('.my-menu')
function openMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenu)
  }
  myMenu.classList.toggle('is-active')
}
function closeMyMenu(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenu)
  }
}

myMenuButton.addEventListener('click', openMyMenu)
