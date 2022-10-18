const shipmentButton = document.querySelector('.product-shipment .icon-button')
function openSection() {
  const shipment = this.parentNode.parentNode
  shipment.classList.add('is-open')
}
shipmentButton.addEventListener('click', openSection)
