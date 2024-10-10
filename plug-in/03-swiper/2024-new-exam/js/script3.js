const topSlider = new Swiper('.top-slider', {
	loop: true,
	slidesPerView: 1,
	loopedSlides: 7, // 슬라이드 갯수와 맞추자

	effect: 'fade',

	// Navigation arrows
	navigation: {
		nextEl: '.slider-wrap .btn-next',
		prevEl: '.slider-wrap .btn-prev',
	},
});

const bottomSlider = new Swiper('.bottom-slider', {
	loop: true,
	slideToClickedSlide: true,

	// css에서 크기를 설정한 후, auto적용
	// slidesPerView: 'auto',
	slidesPerView: 6,
	loopedSlides: 7,
});

// 두 슬라이더 연동
topSlider.controller.control = bottomSlider;
bottomSlider.controller.control = topSlider;
