function initCarousel() {
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let carousel = document.querySelector(".carousel__inner");

  let slidesNow = document.querySelectorAll(".carousel__slide").length;
  let slideWidth = carousel.offsetWidth;
  let currentWidth = 0;
  let counter = 1;
  if (counter === 1) {
    arrowLeft.style.display = "none";
  }
  arrowRight.onclick = function () {
    arrowLeft.style.display = "";
    counter += 1;
    if (counter === slidesNow) {
      arrowRight.style.display = "none";
    }
    carousel.style.transform = `translateX(${currentWidth -= slideWidth}px)`;
  };
  arrowLeft.onclick = function () {
    counter -= 1;
    if (counter === 1) {
      arrowLeft.style.display = "none";
      arrowRight.style.display = "";
    }
    carousel.style.transform = `translateX(${currentWidth += slideWidth}px)`;
  };
}