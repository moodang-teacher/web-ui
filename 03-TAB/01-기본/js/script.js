$(function () {
  // 대상을 변수에 저장
  const tabMenu = $('.tab-menu > li');
  const tabContent = $('.tab-con-item');

  console.log(tabMenu, tabContent);

  // 초기 세팅
  // 첫번째 탭메뉴가 활성화되게끔
  tabMenu.eq(0).addClass('on');

  // 첫번째 항목의 콘텐츠만 보이게
  tabContent.hide();
  tabContent.eq(0).show();

  // 탭메뉴를 클릭했을 때
  tabMenu.on('click', function (e) {
    // a의 기본 동작(링크 이동)을 막자
    e.preventDefault();

    // 클릭한 놈의 인덱스를 구해서 변수에 담고
    const tabIdx = $(this).index();
    console.log(tabIdx);

    // 탭메뉴 활성화
    tabMenu.removeClass('on');
    tabMenu.eq(tabIdx).addClass('on');

    // 탭 콘텐츠 중에서 인덱스에 해당하는 내용을 보여지게
    tabContent.hide();
    tabContent.eq(tabIdx).show();
  });
});
