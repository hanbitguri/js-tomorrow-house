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

const sideBarDrawerButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-button'
)
function toggleDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
  drawerMenu.classList.toggle('is-active')
}
sideBarDrawerButtonList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu)
})
