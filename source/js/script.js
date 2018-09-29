// объявление переменных
var slides = document.querySelectorAll(".slider-header__item");
var slidesLegend = document.querySelectorAll(".legend__item");
var dots = document.querySelectorAll(".slider-dots__dot");
var headerImage = document.querySelector(".page-header__wrapper");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 10000);

function setImage(n) {
  if (n === 1) {
      headerImage.className = "page-header__wrapper page-header__wrapper--cuba";
  } else if (n === 2) {
      headerImage.className = "page-header__wrapper page-header__wrapper--burgundy";
  } else if (n === 3) {
      headerImage.className = "page-header__wrapper page-header__wrapper--antarctica";
  }
}

function nextSlide() {
    goToSlide(currentSlide + 1);
    dotsClick(currentSlide + 1);
}

function goToSlide(n) {
    currentSlide = (n+slides.length)%slides.length;
    setImage(n);
}

function dotsClick(n) {
    currentSlide = (n+slides.length - 1)%slides.length;
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = "slider-dots__dot";
    }
    dots[currentSlide].className = "slider-dots__dot slider-dots__dot--current";
    setImage(n);
}