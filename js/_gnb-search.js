const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

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
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeSearchHistory)
  }
}
gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

const gnbSearchAllRemoveButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryContentList = gnbSearchHistory.querySelector(
  '.search-history-content .search-history-list '
)
function deleteAllHistory() {
  gnbSearchHistoryContentList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
}
gnbSearchAllRemoveButton.addEventListener('click', deleteAllHistory)
