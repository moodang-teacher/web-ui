$(function () {
  const $header = $('#header');
  const $btnTop = $('.btn-top');

  // 탑버튼이 처음에는 안 보이게
  $btnTop.hide();

  // 탑버튼을 클릭하면 화면 상단으로(첫번째 섹션으로 이동)
  $btnTop.on('click', function () {
    // $.fn.fullpage.silentMoveTo('section1');
    $.fn.fullpage.moveTo('section1');
  });

  $('#fullpage').fullpage({
    // * 인디케이터 커스텀

    // 1. 사용할 요소의 이름을 지정
    menu: '.indicator',

    // 2. 앵커(영역)의 이름 설정
    anchors: ['section1', 'section2', 'section3', 'section4'],

    // 3. 실제 링크에 data-menuanchor="영역이름" 적용

    // * 속도조절
    scrollingSpeed: 1000,

    // * 섹션 영역의 콘텐츠 세로 정렬
    verticalCentered: false,

    // * 슬라이더 관련
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    // 영역에 진입한 후
    afterLoad: function (anchorLink, index) {
      console.log('영역에 진입한 후');
      console.log(anchorLink, index);

      // section4영역에 진입하면 탑버튼이 보이게
      if (anchorLink === 'section4') {
        $btnTop.fadeIn();
      }
    },

    // 영역을 떠나갈 때
    onLeave: function (index, nextIndex, direction) {
      console.log('영역을 떠나갈 때');
      console.log(index, nextIndex, direction);

      // 밑에 영역으로 이동하면 헤더에 hide클래스 부여
      if (direction === 'down') {
        $header.addClass('hide');
      } else {
        $header.removeClass('hide');
      }

      // 4번 영역을 떠나가거나 마우스 휠을 올렸을 때
      if (index === 4 || direction === 'up') {
        $btnTop.fadeOut();
      }
    },
  });
});
