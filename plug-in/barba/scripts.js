document.addEventListener('DOMContentLoaded', function () {
  barba.init({
    transitions: [
      {
        name: 'fade',
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            rotation: 180,
            duration: 3,
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0,
            rotation: 270,
            duration: 5,
          });
        },
      },
    ],
  });
});
