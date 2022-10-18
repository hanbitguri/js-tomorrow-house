const floatingOrder = document.querySelector('.floating-order-form')
const floatingOrderButtons = floatingOrder.querySelector('.order-buttons')
const floatingOrderBookMark =
  floatingOrderButtons.querySelector('.bookmark-button')
const floatingOrderCart = floatingOrderButtons.querySelector('.btn-outlined')
const scrapModal = document.querySelector('.scrap-modal')
const scrapModalClose = scrapModal.querySelector('i')

function toggleBookmark() {
  floatingOrderBookMark.classList.toggle('is-active')
  scrapModal.classList.add('is-active')
}
floatingOrderBookMark.addEventListener('click', toggleBookmark)

scrapModalClose.addEventListener('click', function () {
  scrapModal.classList.remove('is-active')
})
