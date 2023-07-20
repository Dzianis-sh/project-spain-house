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


function removeClass(selector, classname) {
  document.querySelectorAll(selector).forEach(function (item) {
    item.classList.remove(classname);
  });
}
function addClass(selector, classname) {
  document.querySelectorAll(selector).forEach(function (item) {
    item.classList.add(classname);
  });
}

const pageControls = document.querySelectorAll(".pagination__item");
let activePage = 0;
const lastPage = document.querySelectorAll(".buildings-pages > div").length - 1;

function showPage(pageNum) {
  removeClass(".pagination .pagination__item--active", "pagination__item--active");

  addClass(`.pagination__item[data-page-num='${pageNum}']`, "pagination__item--active");

  removeClass(".buildings-pages .buildings-pages--active", "buildings-pages--active");
  activePage = pageNum;
  addClass(`.buildings-pages > div:nth-child(${activePage + 1})`, "buildings-pages--active");

  if (pageNum === 0) {
    addClass(`.pagination__item[data-page="prev"]`, "event-none");
  } else {
    removeClass(`.pagination__item[data-page="prev"]`, "event-none");
  }

  if (pageNum === lastPage) {
    addClass(`.pagination__item[data-page="next"]`, "event-none");
  } else {
    removeClass(`.pagination__item[data-page="next"]`, "event-none");
  }
}

pageControls.forEach(function (pageBtn) {

  pageBtn.addEventListener("click", function (event) {

    event.preventDefault();

    if (pageBtn.dataset.page) {
      if (pageBtn.dataset.page === "prev") {
        if (activePage !== 0) {
          showPage(activePage - 1);
        }
      } else if (pageBtn.dataset.page === "next") {
        if (activePage < lastPage) {
          showPage(activePage + 1);
        }
      }
      return;
    }

    const targetPage = Number(pageBtn.getAttribute("data-page-num"));
    if (targetPage != activePage) {
      showPage(targetPage);

      //buildings-pages--active
    }
  });

})
showPage(0);

