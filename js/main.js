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


// show/hide select

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  for (let i = 0; i < selectHeader.length; i++) {
    selectHeader[i].addEventListener("click", function (event) {
      const currentTarget = event.target.closest(".select");

      [].forEach.call(selectHeader, function (el) {
        const item = el.closest(".select");
        if (item !== currentTarget) {
          el.closest(".select").classList.remove("is-active");
        }
      });
      currentTarget.classList.toggle("is-active");
    });
  }

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }

};

select();

// toggle sub-menu

function toggleSubMenu() {
  const subOpenbtn = document.querySelector('.mobile-menu__sub-open');
  const subActive = document.querySelector('.mobile-menu__sub-menu');

  subOpenbtn.addEventListener('click', function () {
    subActive.classList.toggle('visible');
  });
}

toggleSubMenu();


// Show/hide menu
const menuButton = document.querySelector("#menu-btn");
const menuClose = document.querySelector(".mobile-menu__close");
const menu = document.querySelector(".mobile-menu");


window.addEventListener("click", function (event) {
  if (event.target.closest(".select")) {
    return;
  }
  const sel = document.querySelectorAll(".select");

  sel.forEach(function (item) {
    item.classList.remove('is-active');
  });

  if (!event.target.closest('.mobile-menu') || event.target.closest('.mobile-menu__close')) {
    menu.classList.add("hidden");
  }

  if (event.target.closest('#menu-btn')) {
    menu.classList.toggle("hidden");
  }

});


// Page Contols

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
    }
  });

})
showPage(0);


// expand images
const imgItem = document.querySelectorAll('.instagram-gallery__item');
const ItemImgModal = document.querySelector('.modal-img__img');
const ItemsImgAll = document.querySelectorAll('.instagram-gallery__item > img');
const modImgBlock = document.querySelector('.modal-img');
const modImgItem = document.querySelector('.modal-img__item');
const body = document.querySelector('body');
const closeBtnModal = document.querySelector('.modal-img__close');
// console.log(ItemImgIs);


let currentItem;
ItemsImgAll.forEach(img => {
  img.addEventListener('click', function () {
    currentItem = img;
    // console.log(currentItem);
    return currentItem;
  })
});


function expand(event) {
  if (event.target) {
    modImgBlock.style.visibility = 'visible';
    modImgBlock.style.opacity = '1';
    body.classList.add('scrollock');
    ItemImgModal.src = currentItem.src;
  }
}

imgItem.forEach(img => {
  img.addEventListener('click', expand);
});

window.addEventListener('click', function (event) {
  if (event.target.closest('.modal-img')) {
    modImgBlock.style.visibility = 'hidden';
    modImgBlock.style.opacity = '0';
    body.classList.remove('scrollock');
    ItemImgModal.src = "";
  }
});

// object page slider expand photos
// - - -

// toggle languages 

const languages = document.querySelector('.languages');
const languagesHeader = document.querySelector('.header-top__languages');
const languagesMobile = document.querySelector('.mobile-menu__languages');
const languagesItems = document.querySelectorAll('.header-top__languages > .languages__item');
const languagesMobItems = document.querySelectorAll('.mobile-menu__languages > .languages__item');

languagesHeader.addEventListener('click', function (event) {
  if (event.target.closest('.header-top__languages > .languages__item')) {
    languagesItems.forEach(element => {
      element.classList.remove('languages__item--active');
    });
    let currentItem = event.target;
    currentItem.classList.add('languages__item--active');
  }
});

languagesMobile.addEventListener('click', function (event) {
  if (event.target.closest('.mobile-menu__languages > .languages__item')) {
    languagesMobItems.forEach(element => {
      element.classList.remove('languages__item--active');
    });
    let currentItem = event.target;
    currentItem.classList.add('languages__item--active');
  }
});


