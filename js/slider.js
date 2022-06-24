let pageSlider = new Swiper ('.page', {

// My classes
wrapperClass: "page_wrapper",
slideClass: "page_screen",

// Slids number
slidesPerView: 1,

//Speed screen change
speed: 800,

//Перетаскивание кликом по слайду
slideToClickedSlide: false,

//Updates
observer: true,

observeParents: true,

observeSlideChildren: true,

//Menu activeded
init: false,

on: {
    init: function () {
        menuSlider()
    },
    slideChange: function () {
        menuSliderRemove()
        menuLinks[pageSlider.realIndex].classList.add('_active')

    },
},



})

let menuLinks = document.querySelectorAll('.menu_link')

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active')
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index]
            menuLink.addEventListener("click", function (e) {
                menuSliderRemove()
                pageSlider.slideTo(index, 800)
                menuLink.classList.add('_active')
                e.preventDefault()
            })
        }
    }
}

function menuSliderRemove(params) {
    let menuLinkActive = document.querySelector('.menu_link._active')
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active')
    }
}

pageSlider.init()



new Swiper('.image-slider',{
    // Скролл бар
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },

    // Перетаскивание мышью
    simulateTouch: false,

    // Прокрутка колесом мыши
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".image-slider"
    },

    // Количество эллементов в ряд
    slidesPerView: 4,

    // Автоширина
    autoHeight: false,

    // Количество рядов с слайдере
    grid: {
      rows: 2,
      fill: 'row',
    },

    // Свободный скролл
    freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
      },
      nested: true,
      observer: true,
      observerParents: true,
      observeSlideChildren: true,
})
