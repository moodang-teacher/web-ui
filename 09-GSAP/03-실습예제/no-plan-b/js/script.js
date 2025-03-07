$(function () {
    // 타임라인 정의
    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: 'power4.out',
        },
        onUpdate: function () {
            const progressValue = Math.round(this.progress() * 100);
            // console.log(progressValue);

            gsap.to('.progresss .bar', { width: progressValue + '%' });
        },
    });

    // tl.from('', {})
    tl.from('.logo', { y: -100, opacity: 0 });
    tl.from('.menu', { y: -100, opacity: 0 }, '<');
    tl.from('header nav a', {
        y: -100,
        opacity: 0,
        stagger: 0.1,

        // 콜백옵션: onStart, onUpdate..
        onComplete: () => {
            gsap.to('.logo', { y: 10, yoyo: true, repeat: -1, duration: 0.5 });
        },
    });

    // footer
    tl.from('footer', { clipPath: 'inset(0 100% 0 0)' }, 0);

    // bruce lee
    tl.from('.bruce-lee-bg', {
        opacity: 0,
        scale: 0.8,
        ease: 'none',
        filter: 'blur(15px)',
        duration: 2,
    });
    tl.from('.bruce-lee', { opacity: 0, scale: 3, duration: 0.5 });

    // title
    tl.from('.title h2 strong', { x: -50, opacity: 0 });
    tl.from('.title h2 span', { x: -50, opacity: 0 }, '-=0.8');

    tl.from('.small-bruce-lee', {
        xPercent: 200, // translateX(200%)
        duration: 0.7,
        ease: 'elastic.inOut(1,0.3)',

        onComplete: () => {
            $('.small-bruce-lee').addClass('bounce-top');

            // 글자 쪼개기
            const text = new SplitType('.title h2', { types: 'chars' });
            console.log(text.chars);
            // gsap.to(text.chars, { y: 30, stagger: 0.1, repeat: 2, yoyo: true });

            text.chars.forEach((item, index) => {
                item.classList.add('bounce-top');
                item.style.animationDelay = index * 0.3 + 's';
            });

            // 움직이기 시작
            moving();
        },
    });

    // skip
    tl.from('.btn-skip', { opacity: 0, x: -200 }, 0);
    tl.to('.btn-skip', { opacity: 0, x: 50 });
    $('.btn-skip').on('click', () => tl.progress(1));

    // 괴조음 플레이
    // const scream = document.querySelector('.scream');
    const scream = $('.scream').get(0);
    console.log(scream);
    $('.small-bruce-lee, .bruce-lee').on('click', () => scream.play());

    // 6만원짜리
    const $window = $(window);
    let x = 0;
    let mx = 0;
    let speed = 0.09;

    // 마우스가 움직이면 좌표값을 구한다.
    $window.on('mousemove', (e) => {
        x = Math.max(-80, Math.min(300, e.pageX - $window.innerWidth() / 2));
    });

    function moving() {
        // 좌표값을 기준으로 근접하는 값을 구한다.
        mx += (x - mx) * speed;

        // 그 값을 대상에 적용한다.
        $('.bruce-lee').css('transform', `translateX(${mx}px)`);
        $('.bruce-lee-bg').css('transform', `translateX(${-mx / 5}px)`);
        $('.title').css('right', `${mx * 1.12}px`);

        requestAnimationFrame(moving);
    }
});
