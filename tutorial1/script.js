let tl = gsap.timeline()
    // tl.to("#box", {
    //     x: 1500,
    //     rotation: 360,
    //     duration: 1,
    //     delay: 2
    // })
    // tl.to("#box2", {
    //         x: 1500,
    //         rotation: 360,
    //         duration: 1,
    //         delay: 2
    //     })
    // gsap.from("h1", {
    //     opacity: 0,
    //     duration: 1,
    //     // color: "red",
    //     delay: 1,
    //     y: 30,
    //     stagger: 0.3
    // })


// gsap.to("#box", {
//     x: 1000,
//     // borderRadius: "50%",
//     duration: 1,
//     delay: 1,
//     // rotation: 360,
//     // repeat: -1, // 계속 도는거임~
//     // yoyo: true, //되돌아 오는거임~
// })

// gsap.to("#box1", {
//     x: 1000,
//     dration: 2,
//     delay: 1,
//     // rotate: 360,
//     // background: 'blue',
//     // borderRadius: '50%'
// })

// gsap.to("#box2", {
//     x: 1000,
//     dration: 300,
//     delay: 1,
//     // rotate: 360,
// })

// // gsap.from("#box2", {
// //     x: 500,
// //     y: 500,
// //     dration: 2,
// //     delay: 1
// // })


// -----------------------------------------------
tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1
})

tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2
})