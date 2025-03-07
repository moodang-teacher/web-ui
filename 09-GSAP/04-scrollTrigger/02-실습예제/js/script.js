document.addEventListener('DOMContentLoaded', () => {
  // 스크롤트리거 연동
  gsap.registerPlugin(ScrollTrigger);

  // 글자 쪼개기(splitType.js)
  const text = new SplitType('.section2 p', { types: 'chars' });
  console.log(text.chars);

  // 타임라인 & 스크롤트리거 설정
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2',
      markers: true,
      pin: true,
      start: 'top 0%',
      end: 'bottom+=300% 0%',
      scrub: 1,
    },
  });

  // 애니메이션 정의
  // tl.from('.section2 p', { x: 200, autoAlpha: 0 });
  // tl.from(text.chars, { x: 200, autoAlpha: 0, stagger: 0.2 });
  tl.from(text.chars, { opacity: 0.2, stagger: 0.2 });
  tl.to({}, { delay: 3 }); // 지연시간 설정
});
