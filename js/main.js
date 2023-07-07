// header scroll hide

// Hide header when scroll page

let lastScroll = 0;
let defaultOffset = 200;
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

// Show/hide menu
const menuButton = document.querySelector("#menu-btn");
menuButton.addEventListener("click", function () {
  const menu = document.querySelector(".mobile-menu");
  menu.classList.remove("hidden");
});
window.addEventListener("click", function (event) {
  if (event.target.closest("#menu-btn")) {
    return;
  }
  const menu = document.querySelector(".mobile-menu");
  menu.classList.add("hidden");
});
