$(function () {
  // DOM 요소 캐싱
  const $window = $(window);
  const $document = $(document);
  const $progressBar = $('.progress-bar');

  // 상태 변수
  let windowHeight = 0;
  let documentHeight = 0;
  let scrollTop = 0;

  // 초기화
  function initialize() {
    updateDimensions();
    bindEvents();
  }

  function updateDimensions() {
    windowHeight = $window.outerHeight();
    documentHeight = $document.outerHeight();
  }

  function calculateScrollPercentage() {
    scrollTop = $window.scrollTop();
    return `${(scrollTop / (documentHeight - windowHeight)) * 100}%`;
  }

  function updateProgressBar() {
    const progressWidth = calculateScrollPercentage();
    $progressBar.css('width', progressWidth);
  }

  function bindEvents() {
    $window.on('scroll', updateProgressBar).on('resize', () => {
      updateDimensions();
      updateProgressBar();
    });
  }

  // 실행
  initialize();
});
