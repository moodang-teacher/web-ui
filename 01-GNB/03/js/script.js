$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;
  let lastScrollTop = 0;

  // 메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);
    $(this).addClass('on');
    $header.addClass('active');
  });

  // 메뉴 영역에서 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });

  // 스크롤 방향에 따라 header의 hide 클래스를 토글하는 함수
  function toggleHeaderVisibility(directionUp) {
    if (directionUp) {
      $header.removeClass('hide');
    } else {
      $header.addClass('hide');
    }
  }

  // throttle 함수 구현
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // 마우스 휠을 조작할 때
  $window.on('wheel', function (e) {
    toggleHeaderVisibility(e.originalEvent.deltaY < 0);
  });

  // 스크롤할 때 throttle 적용
  $window.on('scroll', throttle(function () {
    const scrollTop = $(this).scrollTop();
    toggleHeaderVisibility(scrollTop < lastScrollTop);
    lastScrollTop = scrollTop;
  }, 250)); // 250ms 간격으로 throttle 적용
});
