const searchIcon = document.querySelector('.gnb-icon-button.is-search')
const searchOverlay = document.querySelector('.overlay')
const searchModal = document.querySelector('.search-modal')
const searchOut = searchModal.querySelector('.btn-ghost')

function searchModalOpen() {
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}
function searchModalClose() {
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}

searchIcon.addEventListener('click', searchModalOpen)
searchOut.addEventListener('click', searchModalClose)
