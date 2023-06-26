// header scroll hide

let lastScroll = 0;
let defaultOffset = 800;
const fixedHeader = document.querySelector('.header__top');

const scrollPosition = () => window.scrollY || document.querySelector.scrollTop;
const containHide = () => fixedHeader.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    fixedHeader.classList.add('hide');

  }
  else if (scrollPosition() < lastScroll && containHide()) {
    fixedHeader.classList.remove('hide');
  }
  lastScroll = scrollPosition();
});