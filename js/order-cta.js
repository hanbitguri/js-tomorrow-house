const orderCta = document.querySelector('.order-cta')
const [bookmarkButton, buyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

buyButton.addEventListener('click', function () {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
})

orderModalOverlay.addEventListener('click', () => {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
})

function toggleBookmarkButton() {
  const [icon, count] = this.children
  let span = Number(count.innerHTML.replaceAll(',', ''))
  let newSpan = span

  bookmarkButton.classList.toggle('is-active')
  if (this.classList.contains('is-active')) {
    icon.classList.replace('ic-bookmark', 'ic-bookmark-filled')
    newSpan += 1
  } else {
    icon.classList.replace('ic-bookmark-filled', 'ic-bookmark')
    newSpan -= 1
  }
  count.innerHTML = newSpan.toLocaleString()
  count.setAttribute('aria-label', `북마크 ${newSpan.toLocaleString()}개`)
}

bookmarkButton.addEventListener('click', toggleBookmarkButton)
