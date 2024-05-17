$(function () {
  // 대상을 변수에 저장
  const $faqQ = $('.faq-wrap > ul > li');
  const $faqA = $('.answer-wrap');
  const duration = 300;

  // 질문을 클릭했을 때
  $faqQ.on('click', function () {
    // on클래스 부여하기전에 다 빼준다
    $faqQ.removeClass('on');

    // 선택한 질문에만 on클래스 부여
    $(this).addClass('on');

    // 선택한 놈의 자손중에서 $faqA를 찾아 내려라
    const sltItem = $(this).find($faqA).stop().slideDown(duration);

    // 선택되지 않은 $faqA는 올려라 (css의 :not과 비슷)
    $faqA.not(sltItem).stop().slideUp(duration);
  });
});
