"use strict";

function openNav() {
  document.querySelector(".closeNav").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow_hide");
  document.querySelector(".menu").classList.toggle("cross");
}

$(".mySlider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1400,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 750,
      settings: {
        autoplay: true,
        autoplaySpeed: 1200,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

let mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
});
