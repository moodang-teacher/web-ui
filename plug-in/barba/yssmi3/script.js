// 스크롤 초기화 함수
function resetScroll(data) {
    window.scrollTo(0, 0);
}

barba.init({
    transitions: [
        {
            name: 'clock-rotation',
            leave(data) {
                const done = this.async();
                document.querySelector('body').style.overflow = 'hidden';

                // 현재 페이지 회전하면서 사라짐
                gsap.to(data.current.container, {
                    duration: 0.8,
                    rotation: -180,
                    scale: 0.8,
                    opacity: 0,
                    ease: 'power2.inOut',
                    transformOrigin: 'center center',
                    onComplete: done,
                });
            },
            enter(data) {
                const done = this.async();

                // 새 페이지 초기 설정
                gsap.set(data.next.container, {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    rotation: 180,
                    scale: 0.8,
                    opacity: 0,
                    transformOrigin: 'center center',
                });

                // 새 페이지 회전하면서 나타남
                gsap.to(data.next.container, {
                    duration: 0.8,
                    rotation: 0,
                    scale: 1,
                    opacity: 1,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        // 원래 상태로 복구
                        gsap.set(data.next.container, {
                            position: 'relative',
                            clearProps: 'all',
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
