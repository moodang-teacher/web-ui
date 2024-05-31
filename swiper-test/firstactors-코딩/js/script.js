$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb > li'); // gnb 클래스의 하위 li 요소 선택
  const $submenu = $('.submenu');
  const duration = 300;

  // 메뉴에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);

    // 활성화된 메뉴 표시 : on 클래스 부여
    $(this).addClass('on');

    // header에 active 클래스 부여
    $header.addClass('active');
  });

  // 메뉴에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });

  // 마우스 휠을 조작할 때
  $window.on('wheel', function (e) {
    // console.log(e);

    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올렸을 때
      $header.removeClass('hide');
    } else {
      // 휠을 내렸을 때
      $header.addClass('hide');
    }
  });

  // 768px 이상 화면 크기에서 슬라이더 활성화
  let onairSlider;

  // 활성화
  function initSwiper() {
    if (!onairSlider) {
      onairSlider = new Swiper('.onair-slider', {
        autoplay: {
          delay: 1000,
        },
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,

        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }

  // 비활성화
  function destroySwiper() {
    if (onairSlider) {
      onairSlider.destroy(true, true);
      onairSlider = null;
    }
  }

  function initOnairSlider() {
    if (window.innerWidth >= 768) {
      initSwiper();
    } else {
      destroySwiper();
    }
  }

  initOnairSlider();

  $(window).on('resize', initOnairSlider);
});
