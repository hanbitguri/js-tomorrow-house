const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeSearchHistory)
}
function openGnbSearchHistory() {
  if (gnbSearchHistoryContentList.children.length === 0) {
    return
  }
  gnbSearchHistory.classList.add('is-active')
  if (gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeSearchHistory)
  }
}

function closeSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}
gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

const gnbSearchAllRemoveButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryContentList = gnbSearchHistory.querySelector(
  '.search-history-content .search-history-list '
)
const gnbSearchHistoryItem = gnbSearchHistoryContentList.querySelector(
  '.search-history-item'
)
const gnbSearchHistoryItemRemoveButtonList =
  gnbSearchHistoryContentList.querySelectorAll('.delete-button')

function deleteAllHistory() {
  gnbSearchHistoryContentList.innerHTML = ''
  closeGnbSearchHistory()
}
gnbSearchAllRemoveButton.addEventListener('click', deleteAllHistory)

// 💄 Handle : history delete-all-button actioning
function deleteSearchHistoryItem(e) {
  e.stopPropagation()
  const itemDelete = this.parentNode
  gnbSearchHistoryContentList.removeChild(itemDelete)

  if (gnbSearchHistoryContentList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

gnbSearchHistoryItemRemoveButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})

// gnbSearchHistoryItemRemoveButton.addEventListener(
//   'click',
//   deleteSearchHistoryItem
// )
