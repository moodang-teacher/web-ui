$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $objWrap = $('.obj-wrap');
  const $obj1 = $objWrap.find('.obj1');
  const $obj2 = $objWrap.find('.obj2');
  const $obj3 = $objWrap.find('.obj3');
  const $obj4 = $objWrap.find('.obj4');

  // 기본 좌표값 및 기본 속도
  let x = 0,
    y = 0,
    mx = 0,
    my = 0,
    speed = 0.008;

  // 마우스가 움직이면
  $window.on('mousemove', (e) => {
    // 좌표의 시작을 화면의 중심으로 설정
    x = e.pageX - $window.outerWidth() / 2;
    y = e.pageY - $window.outerHeight() / 2;
  });

  function moving() {
    // 수정되는 좌표값
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    // 수정된 값을 오브젝트에 적용
    // $obj1.css('transform', `translate(${mx}px, ${my}px)`);
    $obj1.css({
      transform: `translate(${mx}px, ${my}px)`,
      filter: `blur(${mx * 0.05}px)`,
    });

    $obj2.css('transform', `translate3d(${-mx}px, ${-my}px, ${mx * 0.4}px)`);
    $obj3.css('transform', `translate(${mx * 0.3}px, ${-my * 0.3}px) rotate(${mx * 0.5}deg)`);
    $obj4.css('transform', `translate(${mx / 3}px, ${my / 3}px) rotateY(${my}deg)`);

    // 부드러운 반복
    requestAnimationFrame(moving);
  }

  // 동작 실행
  moving();
});
