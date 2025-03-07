window.addEventListener('load', function () {
  const topSlider = new Swiper('.top-slider', {
    autoplay: {
      delay: 0, // CSS 수정과 함께 사용 transition-timing-function: linear;
    },
    speed: 3000,
    loop: true,
    // loopedSlides: 1,
    loopAdditionalSlides: 1, // 이전 버전의 swiper.js를 붙힐 것
    slidesPerView: 'auto', // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const bottomSlider = new Swiper('.bottom-slider', {
    autoplay: {
      reverseDirection: true, // 역방향 재생
      delay: 0,
    },
    speed: 3000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
