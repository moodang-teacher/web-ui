$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $document = $(document);
  const $girl = $('.girl');
  const $puppy = $('.puppy');

  let winHeight = 0;
  let docHeight = 0;
  let scrollTop = 0;
  let percent = 0;
  let lastScrollTop = 0;

  // 일단 숨기고 시작
  $girl.add($puppy).hide();

  getHeight();

  // 브라우저 창의 세로크기, 웹 문서의 세로크기 구하기
  function getHeight() {
    winHeight = $window.outerHeight();
    docHeight = $document.outerHeight();
  }

  // % 구하기
  function updatePosition() {
    // 스크롤 값 구하기
    scrollTop = $window.scrollTop();
    percent = (scrollTop / (docHeight - winHeight)) * 100 + '%';
    $girl.add($puppy).css('left', percent);

    // 스크롤 값이 0이면(상단) 언니, 강아지 숨기기
    if (scrollTop === 0) {
      $girl.add($puppy).fadeOut();
    } else {
      $girl.add($puppy).fadeIn();
    }

    if (scrollTop < lastScrollTop) {
      $girl.css('transform', 'rotateY(180deg)');
    } else {
      $girl.css('transform', 'rotateY(0)');
    }
    lastScrollTop = scrollTop;
  }

  // 스크롤이 발생했을 때
  $window.on('scroll', function () {
    updatePosition();
  });

  // 브라우저의 창 크기가 변할 때
  $window.on('resize', function () {
    getHeight();
    updatePosition();
  });

  // 마우스 휠을 조작할 때
  $window.on('wheel keydown', function (e) {
    console.log(e.originalEvent.deltaY, e.key);

    if (e.originalEvent.deltaY < 0 || e.key === 'ArrowUp') {
      // 휠을 올린 상태(음수)
      $girl.css('transform', 'rotateY(180deg)');
    } else {
      // 휠을 내린 상태(양수)
      $girl.css('transform', 'rotateY(0)');
    }
  });
});
