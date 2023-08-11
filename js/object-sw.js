
const swiper = new Swiper('.object__slider', {
  // Optional parameters
  loop: false,
  setWrapperSize: false,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: {
      el: '.object__row',
      slidesPerView: 7,
      spaceBetween: 10,
      centeredSlide: 0,
    }
  },

  //
  // initialSlide: 0,
  // watchSlidesVisibility: true,
  // watchOverflow: true,
  // centeredSlide: 0,
});