
const swiper = new Swiper('.object__slider', {
  // Optional parameters
  loop: true,
  // setWrapperSize: false,
  speed: 400,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: {
      el: '.object__row',
      spaceBetween: 10,
      centeredSlide: 0,
      slidesPerView: 1,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        315: {
          slidesPerView: 2.6
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3.3,
        },
        560: {
          slidesPerView: 4.3,
        },

        670: {
          slidesPerView: 5.3,
        },
        // when window width is >= 640px
        880: {
          slidesPerView: 7,
        }
      }

    }
  },

});