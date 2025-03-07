// script
const swiper = new Swiper(".event-slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  // centeredSlidesBounds: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1024: {
      slidesPerView: 5,
      centeredSlides: false,
    },
  },
});
