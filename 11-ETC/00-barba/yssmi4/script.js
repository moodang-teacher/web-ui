// 스크롤 초기화 함수
function resetScroll(data) {
    window.scrollTo(0, 0);
}

// 오버레이 요소 생성
const overlay = document.createElement('div');
overlay.className = 'transition-overlay';

// cat 요소 생성 및 추가
const cat = document.createElement('div');
cat.className = 'cat';
overlay.appendChild(cat);

document.body.appendChild(overlay);

try {
    barba.init({
        transitions: [
            {
                name: 'overlay-slide',
                leave(data) {
                    const done = this.async();
                    document.querySelector('body').style.overflow = 'hidden';

                    // 현재 페이지는 그대로 두고 오버레이만 이동
                    gsap.timeline()
                        .set(overlay, {
                            left: '-100%',
                            zIndex: 1000,
                        })
                        .to(overlay, {
                            duration: 1,
                            left: 0,
                            ease: 'power2.inOut',
                            onComplete: done,
                        });
                },
                enter(data) {
                    const done = this.async();

                    // 새 페이지를 현재 페이지 뒤에 배치하고 투명하게 설정
                    gsap.set(data.next.container, {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        zIndex: 1,
                        opacity: 0,
                    });

                    // 현재 페이지를 위로 올리고 오버레이를 그 위에 배치
                    gsap.set(data.current.container, {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        zIndex: 2,
                    });

                    // 오버레이를 최상단에 배치하고 오른쪽으로 이동하면서 페이지 전환
                    const tl = gsap.timeline();

                    tl.set(overlay, {
                        zIndex: 1000,
                    })
                        // 첫 번째 단계: 오버레이가 화면을 덮을 때까지 이동
                        .to(overlay, {
                            duration: 0.6,
                            left: 0,
                            ease: 'power2.in',
                            onComplete: () => {
                                // 화면이 완전히 덮였을 때 페이지 전환 시작
                                gsap.to(data.current.container, {
                                    opacity: 0,
                                    duration: 0.3,
                                    ease: 'power2.inOut',
                                });
                                gsap.to(data.next.container, {
                                    opacity: 1,
                                    duration: 0.3,
                                    ease: 'power2.inOut',
                                });
                            },
                        })
                        // 잠시 멈춤
                        .to(overlay, {
                            duration: 0.1,
                        })
                        // 두 번째 단계: 오버레이가 화면을 벗어날 때까지 이동
                        .to(overlay, {
                            duration: 0.4,
                            left: '100%',
                            ease: 'power2.out',
                        })
                        .set(data.next.container, {
                            zIndex: 2,
                        })
                        .set(data.current.container, {
                            zIndex: 1,
                        })
                        .set(overlay, {
                            left: '-100%',
                        })
                        .call(() => {
                            // 원래 상태로 복구
                            gsap.set([data.current.container, data.next.container], {
                                clearProps: 'all',
                            });
                            document.querySelector('body').style.overflow = '';
                            resetScroll(data);
                            done();
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
} catch (err) {
    console.error('An error occurred during Barba initialization:', err);
}

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
// Remove or comment out the error handling hook
// barba.hooks.error((err) => {
//     console.error('An error occurred:', err);
// });
