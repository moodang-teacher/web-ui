$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $cursor = $('.cursor');

  // 마우스가 움직이면
  $window.on('mousemove scroll', (e) => {
    // console.log(e.pageY, e.clientY, e.screenY);

    // 마우스의 좌표값을 변수에 저장
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // 가짜 커서의 좌표값으로 전달
    $cursor.css({
      left: mouseX,
      top: mouseY,
    });
  });

  // 링크를 눌렀을 때
  $('a').on('mousedown', () => {
    $cursor.addClass('click');
  });

  // 누르고 떼었을 때
  $('a').on('mouseup', () => {
    $cursor.removeClass('click');
  });
});
