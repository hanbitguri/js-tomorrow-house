const slider = tns({
  container: '.product-carousel .slider-list',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  controls: false,
  navContainer: '.product-carousel-thumbnail .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
