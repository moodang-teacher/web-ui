$(function () {
  // DOM 요소 캐싱
  const $window = $(window);
  const $document = $(document);
  const $progressBar = $('.progress-bar');
  const $car = $('.car');
  const $follower = $('.follower');

  // 상태 변수
  let windowHeight = 0;
  let documentHeight = 0;
  let scrollTop = 0;
  let lastScrollTop = 0; // 🚩

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

  function updateProgress() {
    const progressValue = calculateScrollPercentage();
    $progressBar.css('width', progressValue);
    $car.add($follower).css('left', progressValue);

    updateCarDirection(); // 🚩
  }

  // 🚩
  function updateCarDirection() {
    const direction = scrollTop < lastScrollTop ? 'rotateY(0)' : 'rotateY(180deg)';
    $car.css('transform', direction);
    lastScrollTop = scrollTop;
  }

  function bindEvents() {
    $window.on('scroll', updateProgress).on('resize', () => {
      updateDimensions();
      updateProgress();
    });
  }

  // 실행
  initialize();
});
