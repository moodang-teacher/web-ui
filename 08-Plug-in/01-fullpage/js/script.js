$(function () {
  // 대상을 변수에 저장
  const $header = $('header');
  const $btnTop = $('.btn-top');

  // 애니메이션 효과를 적용할 대상
  const $aniEl = $('section > h2, section > p');

  // 페이지가 로딩되면 탑버튼 숨기기
  $btnTop.hide();

  // 탑버튼을 클릭했을 때 상단으로 이동
  $btnTop.on('click', () => {
    // $.fn.fullpage.moveTo(1);
    $.fn.fullpage.moveTo('section1');

    // $.fn.fullpage.silentMoveTo('section1'); // 즉시 이동
  });

  // SECTION2의 SLIDE 4로 🚀 즉시 이동
  // $('.move-sec-slide').on('click', () => {
  //   $.fn.fullpage.silentMoveTo('section2', 4); // 섹션으로 즉시 이동은 하는데 슬라이드까지 도달하지는 못 함
  // });
  $('.move-sec-slide').on('click', () => {
    $.fn.fullpage.silentMoveTo('section2', 0); // section2의 첫 번째 슬라이드로 이동
    setTimeout(() => {
      $.fn.fullpage.moveTo('section2', 3); // section2의 네 번째 슬라이드로 이동
    }, 0); // 슬라이드로 이동
  });

  // 다음 섹션으로 이동
  $('.move-sec').on('click', () => {
    $.fn.fullpage.moveSectionDown();
  });

  // 초기화
  $('#fullpage').fullpage({
    // * 인디케이터 커스텀

    // 1. 사용할 요소의 이름을 지정
    menu: '.indicator',

    // 2. 앵커(영역)의 이름을 설정(앞에 점찍지 않는다.)
    anchors: ['section1', 'section2', 'section3', 'section4', 'footer'],

    // 3. 실제 사용될 링크에 data-menuanchor="영역이름" 적용

    // * 속도조절
    scrollingSpeed: 1000,

    // * 섹션 영역에서 콘텐츠 세로 정렬(상단 기준)
    verticalCentered: false,

    // * 슬라이더 관련 설정
    slidesNavigation: true,

    // * 큰 영역을 생성해야 한다면 (👎비추)
    scrollBar: true, // css에서 스크롤바 디자인 변경 필요
    // normalScrollElements: '.section3',
    normalScrollElements: '.scrollable-content',
    bigSectionsDestination: 'top',

    // 영역에 진입한 후
    afterLoad: function (anchorLink, index) {
      console.log('영역에 진입한 후 : ' + anchorLink, index);

      // 어두운 영역에 있는 인디케이터의 디자인을 변경
      if (anchorLink === 'section3') {
        $('.indicator').addClass('white');
      } else {
        $('.indicator').removeClass('white');
      }

      // section4 영역에 진입하면 탑버튼이 보이게
      if (anchorLink === 'section4' || anchorLink === 'footer') $btnTop.fadeIn();

      $aniEl.addClass('animate');
    },

    // 영역을 떠나갈 때
    onLeave: function (index, nextIndex, direction) {
      console.log('영역을 떠나갈 때 : ' + index, nextIndex, direction);

      // section2에서 뗘날 때
      if (index === 2) {
        $.fn.fullpage.moveTo(2, 0); // section2의 첫 번째 슬라이드로 이동
      }

      // section4 영역을 떠나고 휠을 올렸을때 탑버튼 숨기기
      if (index === 4 || direction === 'up') $btnTop.fadeOut();

      // if () {} else {}
      if (direction === 'down') {
        $header.addClass('hide');
      } else {
        $header.removeClass('hide');
      }

      // section4에서 footer로 이동할 때는 패스 X
      if (index === 4 && direction === 'down') return;

      // 이외의 상황에선 애니메이션 클래스 제거
      $aniEl.removeClass('animate');
    },
  });

  // main-slider 슬라이드 자동 재생 설정
  // setInterval(function () {
  //   // console.log($('.fp-section.active').find('.main-slider'));
  //   if ($('.fp-section.active').find('.main-slider').length > 0) {
  //     $.fn.fullpage.moveSlideRight();
  //   }
  // }, 3000);
});
