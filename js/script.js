var slides = document.querySelectorAll(".img-container");
var btns = document.querySelectorAll(".btn");
let openMenu = document.querySelector("#open-menu");
let menu = document.querySelector(".menu");
let currentSlide = 1;

var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// toggle Menu
openMenu.onclick = () => {
  openMenu.classList.toggle("bx-x");
  menu.classList.toggle("active");
};
