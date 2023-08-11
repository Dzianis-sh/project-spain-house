
const swiper = new Swiper('.object__slider', {
  // Optional parameters
  loop: true,
  // setWrapperSize: false,
  speed: 400,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // autoplay: {
  //   delay: 4000,
  // },
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
});