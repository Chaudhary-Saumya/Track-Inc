var t1 = gsap.timeline();

t1.from(".section1 h2 span", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "ease-in-out",
    stagger: 0.3
})

t1.from(".search-box", {
    duration: 0.5,
    opacity: 0,
    ease: "ease-in-out",
    stagger: 0.3
})

t1.from(".bells", {
    duration: 0.5,
    opacity: 0,
    ease: "ease-in-out",
    stagger: 0.3
})

t1.from(".ell3", {
    duration: 0.5,
    opacity: 0,
    ease: "ease-in-out",
    stagger: 0.3
})


function topSlider() {
    var menu = document.querySelector(".innerNavv .iii");
    var close_menu = document.querySelector(".left-sroller .xmark");

    var t2 = gsap.timeline();
    t2.to(".left-sroller", {
        duration: 1,
        left: 0,
        ease: "power2.out",
        stagger: 0.3
    });

    // Fade in the menu items inside the left-sroller
    t2.from(".left-sroller .m1", {
        duration: 1,
        opacity: 0,
        stagger: 0.2
    });

    // Fade in the close icon inside the img section
    t2.from(".left-sroller .xmark", {
        duration: 1,
        opacity: 0,
        stagger: 0.2
    });

    // Pause the animation initially
    t2.pause();

    // Play the animation when the menu button (bars icon) is clicked
    menu.addEventListener("click", function () {
        t2.play();
    });

    // Reverse the animation when the close button (X icon) is clicked
    close_menu.addEventListener("click", function () {
        t2.reverse();
    });
}

topSlider();