let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});

const prevSlide = document.querySelector('.sale__controls-left');
const nextSlide = document.querySelector('.sale__controls-right');
const slide = document.querySelectorAll('.sale__slider-item-inner');
let currentSlide = 0;

const authorImg = document.querySelector('.authors__image-img');
const authorMin = document.querySelectorAll('.authors__min-img');


authorMin.forEach(function(item, i) {
    item.addEventListener('click', function() {
        authorImg.src = authorMin[i].src;
    })
})

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


