const orderCta = document.querySelector('.order-cta')
const [bookmarkButton, buyButton] = orderCta.children
console.log(orderCta.children)

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
