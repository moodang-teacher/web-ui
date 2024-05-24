$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $sideDot = $('.indicator button');
  const $section = $('#container > section');
  const $btnTop = $('.btn-top');

  // TOP버튼을 클릭했을 때 상단으로 이동
  $btnTop.on('click', function () {
    moveSection(0);
  });

  // 섹션의 위치값 구하기
  console.log($section.eq(1).offset().top);

  // 섹션을 이동하는 동작을 함수로 정의
  function moveSection(pos) {
    $('html, body').stop().animate(
      {
        scrollTop: pos,
      },
      300
    );
  }

  // 인디케이터를 클릭했을 때
  $sideDot.on('click', function () {
    const dotIdx = $(this).index();
    const secPos = $section.eq(dotIdx).offset().top;
    moveSection(secPos);
  });

  // 마우스 휠 & 키보드 조작 이벤트 추가
  $window.on('wheel keydown', function (e) {
    if (e.originalEvent.deltaY < 0 || e.key === 'ArrowUp') {
      // 휠을 올리거나 위로 가는 화살표 키를 누른 경우
      console.log('휠을 올리거나 위로 가는 화살표 키를 누른 경우');
    } else if (e.originalEvent.deltaY > 0 || e.key === 'ArrowDown') {
      // 휠을 내리거나 아래 화살표 키를 누른 경우
      console.log('휠을 내리거나 아래 화살표 키를 누른 경우');
    }

    moveSection(300);
  });
});
