// 스크롤 초기화 함수
function resetScroll(data) {
    window.scrollTo(0, 0);
}

barba.init({
    transitions: [
        {
            name: 'slide',
            leave(data) {
                const done = this.async();
                document.querySelector('body').style.overflow = 'hidden';

                gsap.to(data.current.container, {
                    duration: 0.5,
                    x: window.innerWidth * -1,
                    ease: 'power2.inOut',
                    onComplete: done,
                });
            },
            enter(data) {
                const done = this.async();

                // 시작 위치 설정
                gsap.set(data.next.container, {
                    position: 'fixed',
                    left: '100%',
                    top: 0,
                    width: '100%',
                });

                gsap.to(data.next.container, {
                    duration: 0.5,
                    x: window.innerWidth * -1,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        // 원래 상태로 복구
                        gsap.set(data.next.container, {
                            position: 'relative',
                            left: 'auto',
                            x: 0,
                        });
                        document.querySelector('body').style.overflow = '';
                        resetScroll(data);
                        done();
                    },
                });
            },
            after(data) {
                // 전환 완료 후 추가 작업
                resetScroll(data);
            },
        },
    ],
    prevent: ({ el }) => {
        // 특정 링크 예외 처리
        if (el.classList.contains('no-barba')) return true;
        // 외부 링크 예외 처리
        if (el.href && el.href.indexOf(window.location.origin) === -1) return true;
        return false;
    },
    debug: true, // 개발 중에는 디버그 모드 활성화
});

// 에러 처리
barba.hooks.after(() => {
    // 페이지 전환 후 실행될 코드
    console.log('Transition completed');
});

barba.hooks.enter(() => {
    // 새 페이지 진입 시 실행될 코드
    window.scrollTo(0, 0);
});

// 전역 에러 처리
barba.hooks.error((err) => {
    console.error('An error occurred:', err);
});
