$(function () {
  // 대상을 변수에 저장
  const $gallery = $('.gallery-list > li');
  const $dim = $('.dim');
  const $popup = $('.popup');
  const $btnClose = $('.btn-close');
  const $galleryContent = $('.gallery-content');
  const duration = 300;

  // 브라우저 창 크기 구하기
  const $window = $(window);
  console.log($window.outerWidth());

  // 선택해서 클릭하면 dim이 보이고, 팝업이 뜬다.
  $gallery.on('click', function () {
    $dim.fadeIn();
    $popup.addClass('active');

    // 선택한 이미지의 정보를 가져와서 변수에 담기
    const $imgEl = $(this).find('img');
    // console.log($imgEl);

    // 각각의 정보를 변수에
    const imgSrc = $imgEl.attr('src');
    const imgTitle = $imgEl.attr('alt');
    // const videoSrc = $imgEl.attr('data-link');
    const videoSrc = $imgEl.data('link');
    console.log(imgSrc, imgTitle, videoSrc);

    // 선택한 상황에 따라서
    if (videoSrc) {
      // 블랙핑크 이미지를 클릭한 상태
      $galleryContent.html(`<iframe src="${videoSrc}?autoplay=1" allow="autoplay">`);

      // 브라우저 창크기의 절반을 팝업창의 가로크기로 세팅
      $popup.css('width', $window.outerWidth() / 2);
    } else {
      // 티셔츠 이미지를 클릭한 상태
      $galleryContent.html(`<img src="${imgSrc}">`);
      $popup.css('width', $window.outerWidth() / 3);
    }

    // alt에 담긴 텍스트 뿌리기
    // $galleryContent.prepend(imgTitle);
    // $galleryContent.append(imgTitle);
    $galleryContent.prepend(`<div class="gallery-title">${imgTitle}</div>`);
  });

  // 닫기 버튼을 클릭하면, 팝업창과 dim이 사라지게
  $btnClose.on('click', function () {
    $dim.fadeOut();
    $popup.removeClass('active');

    // 0.5초 후에 갤러리 콘텐츠를 초기화
    setTimeout(function () {
      $galleryContent.html('');
    }, 500);
  });
});
