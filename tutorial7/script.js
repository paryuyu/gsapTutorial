window.addEventListener("wheel", (dets) => {
    // console.log(dets.deltaY)
    if (dets.deltaY > 0) {
        gsap.to(".marque", {
            transform: "translateX(-200%)",
            delay: 1,
            duration: 2,
            repeat: -1,
            ease: "none"
        })

        gsap.to(".marque img", {
            rotate: 180
        })

    } else {
        gsap.to(".marque", {
            transform: "translateX(0%)",
            delay: 1,
            duration: 2,
            repeat: -1,
            ease: "none"
        })

        gsap.to(".marque img", {
            rotate: 0
        })

    }
})

// gsap.to(".marque", {
//     transform: "translateX(-100%)",
//     delay: 1,
//     duration: 2,
//     repeat: -1,
//     ease: "none"
// })