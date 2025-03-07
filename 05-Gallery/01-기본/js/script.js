$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $videoWrap.find('.btn-close');
  const $selectVideo = $('.video-list li');

  // 비디오 리스트에서 선택을 할 때
  $selectVideo.on('click', function () {
    $dim.fadeIn();
    $videoWrap.addClass('active');

    // 선택한 비디오의 주소(data-link)를 가져와서
    // 속성을 가져오는 메서드 attr()
    // const videoLink = $(this).attr('data-link');

    // data() 메서드를 이용해서 더 편하게 가져오자.
    const videoLink = $(this).data('link');

    // 선택한 비디오의 제목(텍스트)을 가져오자.
    const videoTitle = $(this).text(); // .html()

    // iframe의 src 속성에 적용 : attr(속성명, 적용할 값)
    $video.attr('src', videoLink);

    // 선택한 비디오의 제목을 집어넣자.
    $videoWrap.find('.title').text(videoTitle);
  });

  // 닫기버튼을 클릭 할 때
  $btnClose.on('click', function () {
    $dim.fadeOut();
    $videoWrap.removeClass('active');

    // 비디오를 멈추는 방법
    $video.attr('src', '');
  });
});
