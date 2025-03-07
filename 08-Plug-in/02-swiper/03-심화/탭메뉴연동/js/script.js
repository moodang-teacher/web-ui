$(function () {
  const $tabMenu = $('.tab-menu > a');
  const $tabContent = $('.tab-con > div');

  // 각 슬라이더 초기화
  const sliders = [];
  $('.testSlider').each(function (index, element) {
    const slider = new Swiper(element, {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true,
    });
    sliders.push(slider);
  });

  console.log(sliders);

  // 첫 번째 탭 컨텐츠 표시
  $tabContent.hide().eq(0).show();

  // 탭 메뉴 클릭 이벤트
  $tabMenu.on('click', function (e) {
    e.preventDefault();

    const tIdx = $(this).index();

    // 탭 상태 업데이트
    $tabMenu.removeClass('on').eq(tIdx).addClass('on');
    $tabContent.hide().eq(tIdx).show();

    // 클릭된 탭에 해당하는 슬라이더를 첫 번째 슬라이드로 이동
    if (sliders[tIdx]) {
      sliders[tIdx].slideTo(0, 0);
    }
  });
});
