// DOM 구조가 파악되면 실행
$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  // 모바일
  const $btnMmenu = $('.btn-m-menu');
  const $mSubmenu = $('.m-submenu-wrap');
  const $dim = $('.dim');
  const $btnClose = $('.btn-close');
  const $mGnbMenu = $('.m-gnb > li');
  const $mGnbSubmenu = $('.m-gnb-sub');

  // 모바일용 메뉴를 클릭했을 때
  $mGnbMenu.on('click', function () {
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).find($mGnbSubmenu).stop().slideToggle();
    $(this).siblings().find($mGnbSubmenu).stop().slideUp(duration);
  });

  $btnMmenu.on('click', function () {
    $mSubmenu.addClass('active');
    $dim.fadeIn(duration);
  });
  $btnClose.add($dim).on('click', function () {
    $mSubmenu.removeClass('active');
    $dim.fadeOut(duration);

    // 모바일용 서브메뉴 초기화
    $mGnbMenu.removeClass('on');
    $mGnbSubmenu.stop().slideUp(duration);
  });
  // 메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);

    // 활성화 된 메뉴 표시 : on클래스 부여
    $(this).addClass('on');

    // header에 active 클래스 부여
    $header.addClass('active');
  });

  // 메뉴 영역에 마우스가 나가면
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

  // 이벤트 슬라이더
  const eventSlider = new Swiper('.event-slider', {
    autoplay: {
      delay: 1000,
    },
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $('.play').on('click', function () {
    eventSlider.autoplay.start();
  });

  $('.pause').on('click', function () {
    eventSlider.autoplay.stop();
  });
});
