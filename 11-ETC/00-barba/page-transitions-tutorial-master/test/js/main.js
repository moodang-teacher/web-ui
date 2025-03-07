function init() {
    const loader = document.querySelector('.loader');

    // reset position of the loading screen
    gsap.set(loader, {
        scaleX: 0,
        transformOrigin: 'left center',
    });

    function loaderIn() {
        return gsap.to(
            loader,

            {
                duration: 4,
                scaleX: 1,
                transformOrigin: 'left center',
            }
        );
        return gsap.fromTo(
            loader,
            {
                scaleX: 0,
                // transform: 'skewX(20deg)',
            },
            {
                duration: 4,
                scaleX: 1,
                // transform: 'skewX(0deg)',
                // ease: 'Power4.inOut',
                transformOrigin: 'left center',
            }
        );
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        return gsap.to(loader, {
            duration: 1,
            scaleX: 0,
            // transform: 'skewX(-20deg)',
            transformOrigin: 'right center',
            // ease: 'Power4.inOut',
        });
    }

    // do something before the transition starts
    barba.hooks.before(() => {
        document.querySelector('html').classList.add('is-transitioning');
        barba.wrapper.classList.add('is-animating');
    });

    // do something after the transition finishes
    barba.hooks.after(() => {
        document.querySelector('html').classList.remove('is-transitioning');
        barba.wrapper.classList.remove('is-animating');
    });

    //   scroll to the top of the page
    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
    });

    barba.init({
        transitions: [
            {
                async leave() {
                    await loaderIn();
                },
                enter() {
                    loaderAway();
                },
            },
        ],
    });
}

window.addEventListener('load', function () {
    init();
});
