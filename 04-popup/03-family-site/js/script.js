$(function () {
  // 1. select 이용
  // 대상을 변수에 저장
  const $selectMenu = $('.select-menu');

  // select의 선택이 바뀌면 : change
  // input, select, textarea 요소의 value에 변화가 생겼을 때
  $selectMenu.on('change', function () {
    // val(): 폼요소의 값을 가져오거나 세팅
    const linkValue = $(this).val();
    console.log(linkValue);

    // 가져온 값을 주소로 활용
    // location.href = linkValue;

    // 새 창(탭) 열기
    window.open(linkValue);
  });

  // 2. 디자인 커스텀
  const $select = $('.select-wrap > strong');
  const $selectList = $('.select-list');

  $select.on('click', function () {
    $selectList.slideToggle();
    $(this).toggleClass('active');
  });

  $selectList.find('li').on('click', function () {
    // data-link 속성의 값을 가져와서
    // 속성 값을 가져오는 메서드 : attr(속성이름)
    // 특정 속성에 값을 적용할 때 : attr(속성이름, 값)
    // const link = $(this).attr('data-link');

    // data- : 사용자 속성을 다루는 메서드 : data(속성이름)
    const link = $(this).data('link');

    // 브라우저 새 창(탭)열기
    window.open(link);

    // 원상복구
    $selectList.slideUp();
    $select.removeClass('active');
  });
});
