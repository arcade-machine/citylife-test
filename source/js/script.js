// объявление переменных
var slides = document.querySelectorAll(".slider-header__item");
var dots = document.querySelectorAll(".slider-dots__dot");
var header = document.querySelector(".page-header");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 10000);

function setImage(n) {
  if (n === 1) {
      header.className = "page-header page-header--cuba";
  } else if (n === 2) {
      header.className = "page-header page-header--burgundy";
  } else if (n === 3) {
      header.className = "page-header page-header--antarctica";
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

// объявление переменных
var sliderCars = document.querySelectorAll(".slider__item");
var sliderLeftArrow = document.querySelector(".slider__arrow--left");
var sliderRightArrow = document.querySelector(".slider__arrow--right");
var currentCarSlide = 2;

function sliderPosition(slider, sliderNumber, sliderWidth, sliderHeight, zIndex, positionLeft, position, transform) {
    slider[sliderNumber].style.width = sliderWidth + "px";
    slider[sliderNumber].style.height = sliderHeight + "px";
    slider[sliderNumber].style.zIndex = zIndex;
    if (positionLeft === true) {
        slider[sliderNumber].style.right = "auto";
        slider[sliderNumber].style.left = position;
    } else {
        slider[sliderNumber].style.left = "auto";
        slider[sliderNumber].style.right = position;
    }
    slider[sliderNumber].style.transform = transform;
}

function setCurrentCarSlide(n) {
    if (n < 0) {
        currentCarSlide = 0;
    } else if (n === 0) {
        sliderPosition(sliderCars, n, "640", "480", "3", true, "50%", "translate(-50%, -50%)");
        sliderPosition(sliderCars, n + 1, "560", "420", "2", false, "12.5%", "translateY(-50%)");
        sliderPosition(sliderCars, n + 2, "480", "315", "1", false, "0", "translateY(-50%)");
        sliderPosition(sliderCars, n + 3, "400", "265", "0", false, "-20%", "translateY(-50%)");
        sliderPosition(sliderCars, n + 4, "400", "265", "-1", false, "-20%", "translateY(-50%)");
    } else if (n === 1) {
        sliderPosition(sliderCars, n - 1, "560", "420", "2", true, "12.5%", "translateY(-50%)");
        sliderPosition(sliderCars, n, "640", "480", "3", true, "50%", "translate(-50%, -50%)");
        sliderPosition(sliderCars, n + 1, "560", "420", "2", false, "12.5%", "translateY(-50%)");
        sliderPosition(sliderCars, n + 2, "480", "315", "1", false, "0", "translateY(-50%)");
        sliderPosition(sliderCars, n + 3, "400", "265", "0", false, "-20%", "translateY(-50%)");
    } else if (n === 2) {
        sliderPosition(sliderCars, n - 2, "480", "315", "1", true, "0", "translateY(-50%)");
        sliderPosition(sliderCars, n - 1, "560", "420", "2", true, "12.5%", "translateY(-50%)");
        sliderPosition(sliderCars, n, "640", "480", "3", true, "50%", "translate(-50%, -50%)");
        sliderPosition(sliderCars, n + 1, "560", "420", "2", false, "12.5%", "translateY(-50%)");
        sliderPosition(sliderCars, n + 2, "480", "315", "1", false, "0", "translateY(-50%)");
    } else if (n === 3) {
        sliderPosition(sliderCars, n - 3, "400", "265", "0", true, "-20%", "translateY(-50%)");
        sliderPosition(sliderCars, n - 2, "480", "315", "1", true, "0", "translateY(-50%)");
        sliderPosition(sliderCars, n - 1, "560", "420", "2", true, "12.5%", "translateY(-50%)");
        sliderPosition(sliderCars, n, "640", "480", "3", true, "50%", "translate(-50%, -50%)");
        sliderPosition(sliderCars, n + 1, "560", "420", "2", false, "12.5%", "translateY(-50%)");
    } else if (n === 4) {
        sliderPosition(sliderCars, n - 4, "400", "265", "-1", true, "-20%", "translateY(-50%)");
        sliderPosition(sliderCars, n - 3, "400", "265", "0", true, "-20%", "translateY(-50%)");
        sliderPosition(sliderCars, n - 2, "480", "315", "1", true, "0", "translateY(-50%)");
        sliderPosition(sliderCars, n - 1, "560", "420", "2", true, "12.5%", "translateY(-50%)");
        sliderPosition(sliderCars, n, "640", "480", "3", true, "50%", "translate(-50%, -50%)");
    } else if (n > 4){
        currentCarSlide = 4;
    }
}

setCurrentCarSlide(currentCarSlide);

sliderLeftArrow.addEventListener("click", function () {
    currentCarSlide = currentCarSlide - 1;
    setCurrentCarSlide(currentCarSlide);
});

sliderRightArrow.addEventListener("click", function () {
    currentCarSlide = currentCarSlide + 1;
    setCurrentCarSlide(currentCarSlide);
});