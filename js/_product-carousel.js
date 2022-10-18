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

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  loop: false,
  controls: false,
  gutter: 4,
  edgePadding: 16,
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  controlsContainer: '.user-gallery.is-mobile .user-gallery-controls',
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

const userGallery = tns({
  container: '.user-gallery.is-desktop .slider-list',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  loop: false,
  controls: false,
  gutter: 4,
  edgePadding: 16,
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
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
