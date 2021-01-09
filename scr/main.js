"use strict"

const navbarElement = document.querySelector('nav');

const universitiesSliderDots = [
    document.querySelector('#university-dot-slide-1'), 
    document.querySelector('#university-dot-slide-2'), 
    document.querySelector('#university-dot-slide-3')
];


/* --- FIXED NAVBAR --- */
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbarElement.classList.add('nav-scrolled');
    } else {
        navbarElement.classList.remove('nav-scrolled');
    }
});

if(window.scrollY > 50) {
    navbarElement.classList.add('nav-scrolled');
} else {
    navbarElement.classList.remove('nav-scrolled');
}
/* ---! FIXED NAVBAR !--- */

/* --- SLIDER JS --- */
let currentSlideNumber = 1;

const changeSlide = (nextSlideNumber, slideElementId, dotSlideElementId) => {
    const currentyActiveDotElement = document.querySelector('.active-dot');
    const currentlyChosenSlideNumber = currentyActiveDotElement.dataset.slideNumber;
    const currentlyChosenSlideElement = document.querySelector(`${slideElementId}${currentlyChosenSlideNumber}`);

    currentyActiveDotElement.classList.remove('active-dot');
    currentlyChosenSlideElement.classList.remove('show-class');
    currentlyChosenSlideElement.classList.add('hide-class');

    const slideToShowElement = document.querySelector(`${slideElementId}${nextSlideNumber}`);
    slideToShowElement.classList.remove('hide-class');
    slideToShowElement.classList.add('show-class');

    const chosenDot = document.querySelector(`${dotSlideElementId}${nextSlideNumber}`);
    chosenDot.classList.add('active-dot');
};

const sliderInterval = () => {
    currentSlideNumber = ++currentSlideNumber > 3 ? 1 : currentSlideNumber
    changeSlide(currentSlideNumber, '#university-slide-', '#university-dot-slide-');
}

let universitiesInterval = window.setInterval(sliderInterval, 5000);

const handleUniversitiesSliderChange = (event) => {
    event.preventDefault();
    const slideNumberToShow = event.target.dataset.slideNumber;
    currentSlideNumber = slideNumberToShow;
    changeSlide(slideNumberToShow, '#university-slide-', '#university-dot-slide-');
    clearInterval(universitiesInterval);
    universitiesInterval = window.setInterval(sliderInterval, 5000);
};

for (const dot of universitiesSliderDots) {
    dot.addEventListener('click', handleUniversitiesSliderChange);
}
/* ---! SLIDER JS !--- */

/* --- UNIVERSITIES EVENTS SLIDER --- */
const eventsButtonsWrapper = document.querySelector(".events-dots");
const eventsSlides = document.querySelector(".events-inner");

eventsButtonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(eventsButtonsWrapper.children).forEach(item =>
        item.classList.remove("active-dot")
    );

    if (e.target.classList.contains("first")) {
        eventsSlides.style.transform = "translateX(-0%)";
        e.target.classList.add("active-dot");
    } else if (e.target.classList.contains("second")) {
        let num = 100/3;
        eventsSlides.style.transform = `translateX(-${num}%)`;
        e.target.classList.add("active-dot");
    } else if (e.target.classList.contains('third')) {
        let num = 200/3;
        eventsSlides.style.transform = `translateX(-${num}%)`;
        e.target.classList.add('active-dot');
    }

  }
});
/* ---! UNIVERSITIES EVENTS SLIDER !--- */


/* --- COVERED COUNTRIES SLIDER --- */
const countriesButtonsWrapper = document.querySelector(".countries-dots");
const countriesSlides = document.querySelector(".countries-inner");

countriesButtonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(countriesButtonsWrapper.children).forEach(item =>
        item.classList.remove("active-dot")
    );

    if (e.target.dataset.slideNumber == 1) {
        countriesSlides.style.transform = "translateX(-0%)";
        e.target.classList.add("active-dot");
    } else if (e.target.dataset.slideNumber == 2) {
        let num = 100/4;
        countriesSlides.style.transform = `translateX(-${num}%)`;
        e.target.classList.add("active-dot");
    } else if (e.target.dataset.slideNumber == 3) {
        let num = 200/4;
        countriesSlides.style.transform = `translateX(-${num}%)`;
        e.target.classList.add('active-dot');
    } else if (e.target.dataset.slideNumber == 4) {
        let num = 300/4;
        countriesSlides.style.transform = `translateX(-${num}%)`;
        e.target.classList.add('active-dot');
    }

  }
});
/* ---! COVERED COUNTRIES SLIDER !--- */

/* --- TESTIMONIAL SLIDER --- */
const testimonialButtonLeft = document.querySelector(".left-arrow");
const testimonialButtonRight = document.querySelector(".right-arrow");
const testimonialSlides = document.querySelector(".testimonial-inner");
let currentTestimonialSlide = 1;
testimonialSlides.style.transform = `translateX(+${50/6}%)`;
testimonialButtonLeft.disabled = true;
testimonialButtonLeft.classList.add('disabled-button');

testimonialButtonLeft.addEventListener("click", e => {
    e.preventDefault();
    let num = ((--currentTestimonialSlide - 1) * 100 / 6) - (50/6);
    if(currentTestimonialSlide === 1) {
        testimonialSlides.style.transform = `translateX(+${50/6}%)`;
    } else {
        testimonialSlides.style.transform = `translateX(-${num}%)`;
    }

    testimonialButtonRight.disabled = false;
    testimonialButtonRight.classList.remove('disabled-button');
    if(currentTestimonialSlide === 1) {
        testimonialButtonLeft.disabled = true;
        testimonialButtonLeft.classList.add('disabled-button');
    }
})

testimonialButtonRight.addEventListener("click", e => {
    e.preventDefault();
    let num = (currentTestimonialSlide++ * 100 / 6) - (50/6);
    testimonialSlides.style.transform = `translateX(-${num}%)`;

    testimonialButtonLeft.disabled = false;
    testimonialButtonLeft.classList.remove('disabled-button');
    if(currentTestimonialSlide === 6) {
        testimonialButtonRight.disabled = true;
        testimonialButtonRight.classList.add('disabled-button');
    }
})
/* ---! TESTIMONIAL SLIDER !--- */
