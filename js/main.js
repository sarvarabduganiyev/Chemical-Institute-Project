var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
var swiper = new Swiper(".mySwiper2", {
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
    // when window width is >= 480px
    786: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
const universitetSelect = document.querySelector(".universitet-select__div");
const arrow1 = document.querySelector(".arrow1");
const universitet__menu = document.querySelector(".universitet__menu");
const menus = document.querySelector(".menus");
const body = document.querySelector("body");

// universitetSelect.addEventListener("click", () => {
//   universitetSelect.classList.toggle("hidden");
// })

window.addEventListener("click", (e) => {
  if (e.target.closest(".universitet__menu")) {
    universitetSelect.classList.toggle("hidden");
  } else {
    universitetSelect.classList.add("hidden");
  }
});

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const menusUl = document.querySelector(".menusUl");

hamburger.addEventListener("click", () => {
  menusUl.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
});
// Hamburger menu tugashi

// accardion js
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// accardion js
