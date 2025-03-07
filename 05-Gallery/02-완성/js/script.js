$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $videoWrap.find('.btn-close');
  const $selectVideo = $('.video-list li');
  const $body = $('body');

  // 배경용 이미지: 배열 - index, length
  const bgImages = [
    'https://res.heraldm.com/content/image/2023/04/25/20230425000549_0.jpg',
    'https://image.musinsa.com/mfile_s01/2021/05/13/3fb5ed13afe8714a7e5d13ee506003dd120913.jpg',
    'https://img.wkorea.com/w/2021/11/style_6189ebb2d3726.jpg',
    'http://image.yes24.com/images/chyes24/froala/0/48248/58165.jpg',
  ];

  let idx = 0;
  let timer = setInterval(() => {
    idx = (idx + 1) % bgImages.length;
    changeBackgroundImage($body, idx);
  }, 400);

  // 배경이미지 변경용 함수
  function changeBackgroundImage(target, index) {
    target.css('background-image', `url(${bgImages[index]})`);
  }

  $selectVideo.each((index, item) => {
    // console.log(item, index);
    changeBackgroundImage($(item), index);
  });

  // 비디오 리스트에서 선택을 할 때
  $selectVideo.on('click', function () {
    clearInterval(timer);

    $dim.fadeIn();
    $videoWrap.addClass('active');

    // 선택한 놈의 인덱스를 구하기: .index()
    const videoIdx = $(this).index();

    // bgImages 배열 중에서 해당 인덱스의 이미지를 body의 배경이미지로 적용
    $body.css('background-image', `url(${bgImages[videoIdx]})`);

    // 선택한 비디오의 주소(data-link)를 가져와서
    // data() 메서드를 이용해서 더 편하게 가져오자.
    let videoLink = $(this).data('link');
    videoLink += '?autoplay=1'; // A += B => A = A + B

    // 선택한 비디오의 제목(텍스트)을 가져오자.
    const videoTitle = $(this).text(); // .html()

    // iframe의 src 속성에 적용 : attr(속성명, 적용할 값)
    $video.attr('src', videoLink);

    // 선택한 비디오의 제목을 집어넣자.
    // $videoWrap.find('.title').text(videoTitle);
    let titlesHtml = '';
    for (let i = 0; i < 10; i++) {
      titlesHtml += `<p>${videoTitle}</p>`;
    }
    $videoWrap.find('.title').html(titlesHtml);
  });

  // 닫기버튼을 클릭 할 때
  $btnClose.on('click', function () {
    $dim.fadeOut();
    $videoWrap.removeClass('active');

    // 비디오를 멈추는 방법
    $video.attr('src', '');

    // 타이머 설정
    timer = setInterval(() => {
      idx = (idx + 1) % bgImages.length;
      changeBackgroundImage($body, idx);
    }, 800);
  });
});
