const swiper = new Swiper('.slider', {
  // Optional parameters
  loop: true,
  speed: 300,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  grabCursor: true,
  //spaceBetween: 10,
  // autoplay: {
  //   delay: 2000,
  //   stopOnLastSlide: true,
  // }

});
