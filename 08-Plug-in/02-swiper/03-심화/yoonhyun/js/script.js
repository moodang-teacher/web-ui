$(function () {
  const cardSlider = new Swiper('.card-slider', {
    speed: 1000,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    // loopAdditionalSlides: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    on: {
      slideChange: function () {
        $('.card-slider .swiper-slide').toggleClass('on');

        const sIdx = this.realIndex;

        setTimeout(function () {
          // 배경
          $('.bg-list .bg').fadeOut(200);
          $('.bg-list .bg').eq(sIdx).fadeIn(600);

          // 텍스트
          $('.con-list .con').hide();
          $('.con-list .con').eq(sIdx).fadeIn(600);
        }, 300);
      },
    },
  });
});
