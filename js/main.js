var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  var swiper = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 10,
  });
  const universitetSelect = document.querySelector(".universitet-select__div");
  const arrow1 = document.querySelector(".arrow1");
  const universitet__menu = document.querySelector(".universitet__menu");
  const menus = document.querySelector(".menus");



  // universitetSelect.addEventListener("click", () => {
  //   universitetSelect.classList.toggle("hidden");
  // })

  window.addEventListener("click",(e) => {
    if(e.target.closest(".universitet__menu")){
      universitetSelect.classList.toggle("hidden");
    }
    else{
      universitetSelect.classList.add("hidden");
          }
  })