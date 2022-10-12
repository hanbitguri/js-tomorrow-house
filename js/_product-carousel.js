const productCarousel = tns({
  container: '.product-carousel-slider .slider-list',
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

const userGallery = tns({
  container: '.user-gallery .slider-list',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  loop: false,
  controls: false,
  gutter: 4,
  edgePadding: 16,
  navContainer: '.user-gallery-thumbnail .thumbnail-list',
  controlsContainer: '.user-gallery-controls',
  navAsThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    768: {
      gutter: 6,
      controls: true,
      edgePadding: 20,
    },
  },
})
