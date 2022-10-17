const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')
const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40
let currentActiveTab = productTab.querySelector('.is-active')

function clickActiveTab() {
  const tabItem = this.parentNode
  if (currentActiveTab != tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}
function scrollPanel() {
  const tabItem = this.parentNode.getAttribute('aria-labelledby')
  console.log(tabItem)
  const tabPanel = document.querySelector(`#${tabItem}`)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)
  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', clickActiveTab)
  button.addEventListener('click', scrollPanel)
})
const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-qa',
  'product-shipment',
  'product-recog',
]
const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})

const productTabPanelPositionMap = {}

function detectTabPanelPosition() {
  productTabPanelList.forEach((tabPanel) => {
    const id = tabPanel.getAttribute('id')
    const position = window.scrollY + tabPanel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })
}
window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', detectTabPanelPosition)

// 1481 , 9613 ,11229 , 11930 , 12552
//
