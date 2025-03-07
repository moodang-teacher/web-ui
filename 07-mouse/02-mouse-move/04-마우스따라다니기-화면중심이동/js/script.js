$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $info = $('.info');
  const $cursor = $('.cursor');

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.08;

  // 마우스를 움직이면
  $window.on('mousemove', (e) => {
    // 마우스의 좌표값시작을 화면의 정중앙으로 이동
    x = e.pageX - $window.outerWidth() / 2;
    y = e.pageY - $window.outerHeight() / 2;

    // 좌표값 뿌리기
    $info.find('.mouse').text(`마우스 좌표: ${x}, ${y}`);
  });

  function moving() {
    // 마우스 좌표값을 수정
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    // 수정된 좌표값 뿌리기
    $info.find('.mouse-m').text(`수정된 좌표: ${mx.toFixed(3)}, ${my.toFixed(3)}`);

    // cursor의 좌표값으로 수정된 값을 적용
    $cursor.css({
      left: mx,
      top: my,
    });

    requestAnimationFrame(moving);
  }

  moving();
});
