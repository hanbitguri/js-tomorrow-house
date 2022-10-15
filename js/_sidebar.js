const sideBarMenuButton = document.querySelector('.is-menu')
const sideBar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

function sideBarOpen() {
  sideBar.classList.add('is-active')
  overlay.classList.add('is-active')
}
sideBarMenuButton.addEventListener('click', sideBarOpen)

function sideBarClose() {
  sideBar.classList.remove('is-active')
  overlay.classList.remove('is-active')
}
overlay.addEventListener('click', sideBarClose)
