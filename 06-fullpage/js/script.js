$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $sideDot = $('.indicator button');
  const $section = $('#container > section');
  const $btnTop = $('.btn-top');

  // top버튼 숨기고 시작
  $btnTop.hide();

  // 항목별 인덱스를 활용
  let secIdx = 0;

  moveSection(secIdx);

  // TOP버튼을 클릭했을 때 상단으로 이동
  $btnTop.on('click', function () {
    secIdx = 0;
    moveSection(secIdx);
  });

  // 섹션을 이동하는 동작을 함수로 정의
  function moveSection(index) {
    // 인덱스를 활용해서 섹션의 위치값 구하기
    const posTop = index * $window.outerHeight();

    $('html, body').stop().animate(
      {
        scrollTop: posTop,
      },
      300
    );

    updateDot(index);
    console.log(secIdx);

    // Top버튼 보이게/숨기게
    if (secIdx >= 2) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }
  }

  // 인디케이터를 클릭했을 때
  $sideDot.on('click', function () {
    secIdx = $(this).index();

    moveSection(secIdx);
  });

  // 인디케이터 업데이트하는 함수
  function updateDot(index) {
    $sideDot.removeClass('on').eq(index).addClass('on');
  }

  // 마우스 휠 & 키보드 조작 이벤트 추가
  $window.on('wheel keydown', function (e) {
    if ($('html, body').is(':animated')) return;

    if (e.originalEvent.deltaY < 0 || e.key === 'ArrowUp') {
      // 휠을 올리거나 위로 가는 화살표 키를 누른 경우

      // 조건을 걸어서 코드를 종료
      if (secIdx === 0) return;

      secIdx--;
    } else if (e.originalEvent.deltaY > 0 || e.key === 'ArrowDown') {
      // 휠을 내리거나 아래 화살표 키를 누른 경우

      if (secIdx === $section.length - 1) return;
      secIdx++;
    }

    moveSection(secIdx);
  });

  // 브라우저 창이 조정될 때
  $window.on('resize', function () {
    moveSection(secIdx);
  });
});
