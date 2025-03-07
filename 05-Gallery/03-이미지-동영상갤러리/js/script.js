$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $popup = $('.popup');
  const $btnClose = $('.btn-close');
  const $galleryItem = $('.gallery-list > li');
  const $galleryContent = $('.gallery-content');

  const $window = $(window);
  console.log($window.outerWidth()); // innerWidth()

  // $galleryItem를 클릭했을 때, dim과 popup을 보이게
  $galleryItem.on('click', function () {
    // 클릭한 li의 하위요소 img의 src정보를 변수에 담는다.
    const imgSrc = $(this).find('img').attr('src');

    // alt 정보를 변수에 담는다.
    const imgTitle = $(this).find('img').attr('alt');

    // 비디오 정보를 변수에 담는다.
    // const videoSrc = $(this).find('img').data('link');
    const videoSrc = $(this).find('img').attr('data-link');

    console.log(imgSrc, imgTitle, videoSrc);

    // 팝업창의 콘텐츠 부분에 집어넣는다.
    // A.prepend(B): A에 B를 첫째 자식으로 넣는다.
    // A.append(B): A에 B를 막내 자식으로 넣는다.
    $popup.prepend(`<div class="title">${imgTitle}</div>`);

    // 조건을 따진다.
    if (videoSrc) {
      // 비디오 정보를 삽입
      $galleryContent.html(`<iframe src="${videoSrc}?autoplay=1" allow="autoplay">`);
      $popup.css('width', $window.outerWidth() / 2);
    } else {
      // false의 상황, 이미지 정보를 삽입
      $galleryContent.html(`<img src="${imgSrc}">`); // .text()
      $popup.css('width', $window.outerWidth() / 3);
    }

    $dim.fadeIn();
    $popup.addClass('active');
  });

  // $btnClose를 클릭했을 때, dim과 popup을 안 보이게
  $btnClose.on('click', function () {
    $dim.fadeOut();
    $popup.removeClass('active');

    //0.5초 후에
    // setTimeout(동작, 시간)
    setTimeout(() => {
      // 콘텐츠를 비워주자
      $galleryContent.html('');
      $popup.find('.title').remove();
    }, 500);
  });
});
