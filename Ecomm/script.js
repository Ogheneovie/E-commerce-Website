// copy menu for mobile
function copyMenu() {
    // copy inside .dpt.cat to departments
    let dptCategory = document.querySelector('.dpt-cat');
    let dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy insdie nav to nav
    let mainNav = document.querySelector('.header-nav nav');
    let navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav
    let topNav = document.querySelector('.header-top');
    let topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const MENU_BUTTON = docuent.querySelector('.trigger'),
      CLOSE_BUTTON = document.querySelector('.t-close'),
      ADD_CLASS = document.querySelector('.site');
MENU_BUTTON.addEventListener('click', function() {
    ADD_CLASS.classList.toggle('showmenu')
})
CLOSE_BUTTON.addEventListener('click', function() {
    ADD_CLASS.classList.remove('showmenu')
})

// show sub menu on mobile
const SUB_MENU = document.querySelectorAll('.has-child  .icon-small');
SUB_MENU.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    SUB_MENU.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest ('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

const SWIPER = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

  });

//show search
const SEARCH_BUTTON = document.querySelector('.t-search'),
      T_CLOSE = document.querySelector('.search-close'),
      SHOW_CLASS = document.querySelector('.site');
SEARCH_BUTTON.addEventListener('click', function() {
    SHOW_CLASS.classList.toggle('showsearch')
});
T_CLOSE.addEventListener('click', function() {
    SHOW_CLASS.classList.remove('showsearch')
});

// show dpt menu
const DPT_BUTTON = document.querySelector('.dpt-cat .dpt-trigger'),
      DPT_CLASS = document.querySelector('.site');
DPT_BUTTON.addEventListener('click', function() {
    DPT_CLASS.classList.toggle('showdpt')
});

//product image slider
let productThumb = new Swiper ('.small-image', {
    loop: true, 
    spaceBetween: 10,
    slidersPerView: 3,
    freeMode: true,
    watchSlidesProgess: true,
    breakpoint: {
        481: {
            spaceBetween: 32,
        }
    }
} )
let productBig = new Swiper ('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        Swiper: productThumb,
    }

})

// stock products bar width percentage
let stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector('.qty-available').innerHTML,
    sold = stocks[x].querySelector('.qty-sold'),
    percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}

// show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout( () {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show')
        }
    }, 250 )
})

// close by click outside
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if(!isClosest && divPopup.classList.contains(show)) {
        divPopup.classList.remove(show);
    }
})