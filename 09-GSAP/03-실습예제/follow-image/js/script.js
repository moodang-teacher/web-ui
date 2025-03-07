$(function () {
  // 대상을 변수에 저장
  const title = $('.wrap h1');
  const picList = $('.pic-list');
  const list = picList.find('li');
  // const list = $('.pic-list li');
  const imgBox = $('.img-box');
  const bg = $('.bg');

  // 초기 세팅
  gsap.set(imgBox, { autoAlpha: 0, scale: 0.8 });
  gsap.set(bg, { scale: 1.5 });

  // 애니메이션을 위한 타임라인 설정
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: 'power4.inOut' },
  });

  tl.from(title, { x: -100, autoAlpha: 0 });
  tl.from(
    list,
    {
      // rotation: 10,
      autoAlpha: 0,
      transformOrigin: '0 0',
      y: 50,
      stagger: 0.2,
      duration: 2,
      ease: 'bounce.out',
      // ease: 'steps(5)',

      onComplete: () => {
        // 사진 나오게 하기
        showImage();

        // 따라다니게 하기
        followImage();
      },
    },
    '<'
  );

  // 사진 나오게 하기
  function showImage() {
    list.on('mouseenter', function () {
      // this 사용예정
      console.log($(this));

      // 선택한 li의 인덱스 구하기
      const imgIndex = $(this).index();

      // 인덱스에 해당하는 이미지 보여주기
      imgBox.html(`<img src="./img/newjeans${imgIndex + 1}.webp" />`);

      // 이미지 박스 보여주기
      gsap.to(imgBox, { autoAlpha: 1, scale: 1 });
    });

    // ul을 벗어나면 이미지 박스 숨기기
    picList.on('mouseleave', () => {
      gsap.to(imgBox, { autoAlpha: 0, scale: 0.8 });
    });
  }

  function followImage() {
    // 변수 정의
    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;
    const speed = 0.09;

    // 마우스가 움직이면 위치값 가져오기
    picList.on('mousemove', (e) => {
      x = e.pageX;
      y = e.pageY;
    });

    // 위치값 수정하기 -> 함수정의 moving()
    function moving() {
      mx += (x - mx) * speed;
      my += (y - my) * speed;

      // 원하는 대상에(imgBox)에 수정한 위치값 적용하기
      // imgBox.css({
      //   left: mx,
      //   top: my,
      // });

      gsap.to(imgBox, {
        left: mx,
        top: my,
        rotation: -mx * 0.02,
        transformOrigin: '0 0',
        scale: mx * 0.001,
      });

      // 배경 움직이기
      gsap.to(bg, {
        x: -mx * 0.03,
        y: my * 0.02,
      });

      requestAnimationFrame(moving);
    }

    moving();
  }
});
