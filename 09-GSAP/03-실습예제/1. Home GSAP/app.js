document.addEventListener('DOMContentLoaded', () => {
  // 대상을 변수에 저장
  const navLinks = document.querySelectorAll('.container-nav a');
  // console.log(navLinks);
  const logo = document.querySelector('.logo');
  const leaf = document.querySelector('.leaf');

  const title = document.querySelector('.home-content h1');
  const middleLine = document.querySelector('.middle-line');
  const grape = document.querySelector('.home-content img');
  const button = document.querySelector('.home-content button');
  const video = document.querySelector('.home video');

  // setTimeout(동작, 시간)
  setTimeout(revealAni, 1000);

  document.addEventListener('click', revealAni);

  // 애니메이션을 함수로 정의
  function revealAni() {
    // 애니메이션의 타임라인 설정
    const TL = gsap.timeline({
      // 공통정의
      defaults: { duration: 1, ease: 'power4.out' },
    });

    // TL.to(video, { clipPath: 'inset(0 0 0 0)' });

    TL.to(title, {
      y: 50,
      autoAlpha: 1,

      onComplete: () => {
        const text = new SplitType(title, { types: 'chars' });
        // 애니메이션 세팅
        gsap.from(text.chars, { x: -50, opacity: 0, stagger: 0.1 });
      },
    });

    TL.to(middleLine, { y: 50, height: 200 }, '-=0.5');
    TL.to(grape, { y: 50, autoAlpha: 1, ease: 'bounce.out' }, '-=0.5');
    TL.to(button, { y: 50, autoAlpha: 1 }, '-=0.5');

    TL.to(logo, { y: 50, autoAlpha: 1 });
    TL.to(leaf, { y: 50, autoAlpha: 1 }, '<');
    TL.to(
      navLinks,
      {
        y: 50,
        autoAlpha: 1,
        stagger: 0.2,
        // onComplete: () => {
        //   alert('hi~!');
        // },
      },
      '-=0.5'
    );
  }
});
