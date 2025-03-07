$(function () {
  // 대상을 변수에 저장
  const $btnMenu = $('.btn-menu');
  const $dim = $('.dim');
  const $menuWrap = $('.menu-wrap');

  // $btnMenu를 클릭했을 때: 버튼이 하나이므로 토글로 동작
  $btnMenu.on('click', function () {
    // dim이 보이게(fadeIn)
    $dim.fadeToggle();

    // $btnMenu에 on클래스 부여
    $btnMenu.toggleClass('on');

    // $menuWrap에 active클래스 부여
    $menuWrap.toggleClass('active');
  });
});
