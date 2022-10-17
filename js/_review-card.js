const reviewCardFooter = document.querySelector('.review-card-footer')
const reviewLikeButton = reviewCardFooter.querySelector('button')
const reviewLikeCount = reviewCardFooter.querySelector('p strong span')
function toggleLikeButton() {
  reviewLikeButton.classList.toggle('btn-outlined')
  reviewLikeButton.classList.toggle('btn-primary')

  const isLiked = reviewLikeButton.classList.contains('btn-primary')
  const HELPFUL = '도움됨'
  const NOT_HELPFUL = '도움이 돼요'
  //const checkIcon = `<i class="ic-check" aria-hidden></i>` 1. 리터럴로 때려박는 방법
  if (isLiked) {
    const check = document.createElement('i')
    check.classList.add('ic-check')
    check.setAttribute('aria-hidden')
    this.innerHTML = HELPFUL
    this.prepend(check)
  } else {
    reviewLikeButton.innerHTML = NOT_HELPFUL
  }
}
reviewLikeButton.addEventListener('click', toggleLikeButton)
