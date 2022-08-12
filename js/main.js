let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    offset: 200
});
// menu
const burgerBtn = document.querySelector('.burger-box');
const burgerIcon = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');
const menuLinks = document.querySelectorAll('.header__menu-link');
const blackout = document.querySelector('.blackout');
// cart
const cart = document.querySelectorAll('.catalogue__item-cart');
const cartItem = document.querySelector('.header__cart-item');
// sales_slide
const prevSlide = document.querySelector('.sale__controls-left');
const nextSlide = document.querySelector('.sale__controls-right');
const slide = document.querySelectorAll('.sale__slider-item-inner');
let currentSlide = 0;
// authors_slide
const authorImg = document.querySelector('.authors__image-img');
const authorMin = document.querySelectorAll('.authors__min-img');


// menu-Script
burgerBtn.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
    blackout.classList.toggle('active');
    menuLinks.forEach (el => el.addEventListener('click', function(){
        burgerIcon.classList.remove('active');
        menuList.classList.remove('active');
        blackout.classList.remove('active');
    }))
    blackout.addEventListener('click', function(){
        burgerIcon.classList.remove('active');
        menuList.classList.remove('active');
        blackout.classList.remove('active');
    })
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            burgerIcon.classList.remove('active');
            menuList.classList.remove('active');
            blackout.classList.remove('active');
        }
    })
})
// cart-Script
cart.forEach(el => el.addEventListener('click', function(){
        cartItem.textContent++;
    })
)
// author_slide-Script
authorMin.forEach(function(item, i) {
    item.addEventListener('click', function() {
        authorImg.src = authorMin[i].src;
    })
})
// sales_slide-Script
prevSlide.addEventListener('click', function(){
    if (currentSlide > 0) {
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active');
        }
        slide[currentSlide-1].classList.add('active');
        currentSlide--;
        return currentSlide;
    }
})

nextSlide.addEventListener('click', function(){
    if (currentSlide < slide.length-1) {
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active');
        }
        slide[currentSlide+1].classList.add('active');
        currentSlide++;
        return currentSlide;
    }
})