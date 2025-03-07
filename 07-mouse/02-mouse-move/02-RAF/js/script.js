// 대상을 변수에 저장
const man = document.querySelector('.man');
const cat = document.querySelector('.cat');
const info = document.querySelector('.info');
const winWidth = window.outerWidth;

console.log(winWidth);

let xPos = 0;
let raf;
let isRunning = true;

// 고양이 달리기
function running() {
  info.textContent = xPos;
  man.style.transform = `translateX(${xPos}px)`;
  cat.style.transform = `translateX(${xPos}px)`;
  xPos += 6;

  // if (xPos < winWidth) {
  //   requestAnimationFrame(running);
  // }

  raf = requestAnimationFrame(running);
  // 다시 처음으로
  if (xPos >= winWidth) xPos = 0;
}

// 화면을 클릭했을 때 달리기를 멈추게
window.addEventListener('click', () => {
  // 상태를 정해서
  if (isRunning) {
    cancelAnimationFrame(raf);
    man.style.animationPlayState = 'paused';
    cat.style.animationPlayState = 'paused';
    // isRunning = false;
  } else {
    // raf = requestAnimationFrame(running);
    running();
    man.style.animationPlayState = 'running';
    cat.style.animationPlayState = 'running';
    // isRunning = true;
  }

  isRunning = !isRunning;
});

running();
