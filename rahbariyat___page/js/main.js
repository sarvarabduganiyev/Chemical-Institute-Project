const universitetSelect = document.querySelector(".universitet-select__div");
const arrow1 = document.querySelector(".arrow1");
const universitet__menu = document.querySelector(".universitet__menu");
const menus = document.querySelector(".menus");
const body = document.querySelector("body");

window.addEventListener("click", (e) => {
  if (e.target.closest(".universitet__menu")) {
    universitetSelect.classList.toggle("hidden");
  } else {
    universitetSelect.classList.add("hidden");
  }
});

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
