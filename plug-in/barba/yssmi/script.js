barba.init({
  transitions: [
    {
      name: 'fade',
      leave() {
        // create your stunning leave animation here
        console.log('leave');
      },
      enter() {
        // create your amazing enter animation here
        console.log('enter');
      },
    },
  ],
});
