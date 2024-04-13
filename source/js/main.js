import { initAccordion } from './modules/accordion/init-accordion';
import { initHeaderAccordion } from './modules/header-accordion/init-header-accordion';
import { initCustomSelect } from './modules/custom-select/init-custom-select';
import { initHeader } from './modules/header/init-header';
import { initModals } from './modules/modal/init-modals';
import { initPhoneMask } from './modules/init-phone-mask';
import { initPhoneValidation } from './modules/init-phone-validation';
import { initInfoSlider } from './modules/init-info-slider';


window.addEventListener('DOMContentLoaded', () => {
  initHeader();

  window.addEventListener('load', () => {
    initHeaderAccordion();
    initModals();
    initCustomSelect();
    initAccordion();
    initPhoneMask();
    initPhoneValidation();
    initInfoSlider();
  });
});



// Слайдер с навигацией в виде картинок //

/*const swiper1 = new Swiper('.swiper-container', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: '.swiper-thumbs',
  },
});

const swiper2 = new Swiper(".swiper-thumbs", {
  spaceBetween: 10,
  watchSlidesProgress: true,
});*/


const swiper = new Swiper('.service__slider', {
  slidesPerView: 3,
  spaceBetween: 40,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  loop: true,
  breakpoints: {
    310: {
      slidesPerView: 1,
    },

    450: {
      slidesPerView: 1,
    },

    740: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1281: {
      slidesPerView: 2,
    },

    1700: {
      slidesPerView: 2,
    },

    1790: {
      slidesPerView: 2,
    },

    1791: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function () {
  const stickyHeaderTop = $('#stickytypeheader').offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= stickyHeaderTop) {
      $('#stickytypeheader').css({ position: 'fixed', top: '0px', right: '0px' });
      //$('#sticky').css('display', 'block');
    } else {
      $('#stickytypeheader').css({ position: 'absolute', top: '0px', right: '0px' });
      //$('#sticky').css('display', 'none');
    }
  });
});

$(function () {
  const sticker = $('#sticker').offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= sticker) {
      $('#sticker').css({ position: 'fixed', top: '130px', left: '0px' });
    } else {
      $('#sticker').css({ position: 'absolute', top: '100px', left: '0px' });
    }
  });
});

$(function () {
  const stickerMobile = $('#sticker-m').offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= stickerMobile - 500) {
      $('#sticker-m').css({ position: 'fixed', top: '200px', left: '0px' });
    } else {
      $('#sticker-m').css({ position: 'absolute', top: '490px', left: '0px' });
    }
  });
});


var init = false;
var swiper1;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper1 = new Swiper('.articles__slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        loop: true,
        breakpoints: {
          310: {
            slidesPerView: 1,
          },

          601: {
            slidesPerView: 2,
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  } else if (init) {
    swiper1.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);

var caps = false;
var swiper2;
function swiperCardArticle() {
  if (window.innerWidth <= 768) {
    if (!caps) {
      caps = true;
      swiper2 = new Swiper(' .articles__slider.slider2', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
          310: {
            slidesPerView: 1,
          },

          670: {
            slidesPerView: 2,
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  } else if (caps) {
    swiper2.destroy();
    caps = false;
  }
}

swiperCardArticle();
window.addEventListener("resize", swiperCardArticle);

/*$(document).ready(function () {
  $(".pipe-machines__link").click(function () {
    if (window.innerWidth <= 1024) {
      $(".pipe-machines__sublist").toggleClass("pipe-machines__sublist--actve")
    }
    //$(".pipe-machines__sublist").toggleClass("pipe-machines__sublist--actve")
  })
})*/

$(document).ready(function () {
  $('.pipe-machines__link').on('click', function (e) {
    e.preventDefault();

    const menu = $(this).next('.pipe-machines__sublist');
    if (!menu.hasClass('show')) {
      $('.pipe-machines__sublist').removeClass('show');
      menu.addClass('show');
    } else {
      window.location.href = $(this).attr('href');
    }

    $('.pipe-machines__link').removeClass('pipe-machines__link--active');
    $(this).addClass('pipe-machines__link--active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.pipe-machines__link, .pipe-machines__sublist').length) {
      $('.pipe-machines__sublist').removeClass('show');
      $('.pipe-machines__link').removeClass('pipe-machines__link--active');
    }
  });
});


var docs = false;
var swiperDocs;
function swiperCardDocs() {
  if (window.innerWidth <= 768) {
    if (!docs) {
      docs = true;
      swiperDocs = new Swiper('.document__block-image', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
          310: {
            slidesPerView: 1,
          },

          670: {
            slidesPerView: 2,
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  } else if (docs) {
    swiperDocs.destroy();
    docs = false;
  }
}

swiperCardDocs();
window.addEventListener("resize", swiperCardDocs);
/*window.addEventListener("scroll", function() {
  const sticky = document.querySelector(".news-block");
  const stickyTop = sticky.offsetTop;

  if (window.pageYOffset >= stickyTop) {
    sticky.classList.add("sticky");
  } else {
    sticky.classList.remove("sticky");
  }
});*/

/*const mySwiper2Prev = document.querySelector('.swiper-button-prev-two')
const mySwiper2Next = document.querySelector('.swiper-button-next-two')
const main = new Swiper('.buy__slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  breakpoints: {
    280: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 1,
    },

    601: {
      slidesPerView: 2,
    }


  },


  navigation: {
    nextEl: mySwiper2Next,
    prevEl: mySwiper2Prev,
  },
});

document.addEventListener('DOMContentLoaded', () => {

  let myBtns = document.querySelectorAll('.pipe-machines__page-link');
  myBtns.forEach(function (btn) {

    btn.addEventListener('click', () => {
      myBtns.forEach(b => b.classList.remove('pipe-machines__page-link--active'));
      btn.classList.add('pipe-machines__page-link--active');
    });

  });
});



const swiper1 = new Swiper('.swiper-container', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: '.swiper-thumbs',
  },
});

const swiper2 = new Swiper(".swiper-thumbs", {
  spaceBetween: 10,
  watchSlidesProgress: true,
});

// Подключение слайдера на определенном брейкпоинте //


  
  
  // Закрытие элемента по клику и сохранение состояния закрытия после перезагрузки страницы //

  document.addEventListener("DOMContentLoaded", function () {
    const block = document.getElementById("block");
    const closeButton = document.getElementById("closeButton");
    const openButton = document.getElementById("openButton");

    if (localStorage && localStorage.hasOwnProperty('blockHidden')) {
        if (localStorage.getItem("blockHidden") === "true") {
            block.style.display = "none";
        }
    }

    closeButton.addEventListener("click", function () {
        block.style.display = "none";
        localStorage.setItem("blockHidden", "true");
    });

    openButton.addEventListener("click", function () {
        block.style.display = "block";
        localStorage.setItem('blockHidden', 'false');
    })
}); */



/*const prodBtn = document.querySelectorAll('.view__tab-btn');
const tabsInfo = document.querySelectorAll('.view__tab-info');


for (let item of prodBtn) {
  item.addEventListener('click', function () {
    for (let element of tabsInfo) {
      element.classList.remove('view__tab-info--active')
    }

    const content = document.querySelector('#' + item.dataset.tab);
    content.classList.add('view__tab-info--active')
  })
};*/

/*document.addEventListener('DOMContentLoaded', () => {
  prodBtn[0].classList.add('view__tab-btn--active');
  //prodBtn[0].style.borderBottom = 'none';
  tabsInfo[0].classList.add('view__tab-info--active');

  let myBtns = document.querySelectorAll('.view__tab-btn');
  myBtns.forEach(function (btn) {

    btn.addEventListener('click', () => {
      myBtns.forEach(b => b.classList.remove('view__tab-btn--active'));
      btn.classList.add('view__tab-btn--active');
    });

  });

});*/


/*$(document).ready(function () {
  $(".popup__close").click(function () {
    $(".popup").toggleClass("popup--hide")
  })

  $(".view__btn").click(function () {
    $(".popup").removeClass("popup--hide")
  })

  $(".popup__background").click(function () {
    $(".popup").addClass("popup--hide")
  })
})*/


/*const btnClose = document.querySelector('.header__btn-hach');
const mainMenu = document.querySelector('.header');
btnClose.addEventListener('click', function () {
  mainMenu.classList.remove('is-open');
})*/








