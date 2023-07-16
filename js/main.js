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

// show/hide select

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');


  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
};

select();