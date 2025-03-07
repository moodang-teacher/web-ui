const centerSlider = new Swiper('.center-slider', {
    loop: true,
    autoplay: true,

    // slidesPerView: 'auto', // 중앙 정렬 틀어짐
    slidesPerView: 4, // 3.5
    spaceBetween: 30,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
