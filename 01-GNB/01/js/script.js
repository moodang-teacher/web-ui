// DOM 구조가 파악되면 실행
$(function () {
  // alert('준비완료!');

  // 대상을 변수에 저장
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  // 메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    // 그 영역 하위의 $submenu를 slideDown()
    // $submenu.slideDown();
    // stop() : 현재 진행 중인 애니메이션을 즉시 중지
    $(this).find($submenu).stop().slideDown(duration);

    // 활성화된 메뉴 표시 : on클래스 부여
    $(this).addClass('on');
  });

  // 메뉴 영역에서 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
  });
});
