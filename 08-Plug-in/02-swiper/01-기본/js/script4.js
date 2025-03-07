const bottomSlider = new Swiper('.bottom-slider', {
	loop: true,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
});

const topSlider = new Swiper('.top-slider', {
	loop: true,
	autoplay: true,
	effect: 'fade',

	navigation: {
		nextEl: '.slider-wrap .btn-next',
		prevEl: '.slider-wrap .btn-prev',
	},
	thumbs: {
		swiper: bottomSlider,
	},
});
