// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })

// // gsap.from("#page2 #box", {
// //     scale: 0,
// //     delay: 1,
// //     duration: 2,
// //     rotate: 360,
// //     // scrollTrigger: "#page2 #box",
// //     scrollTrigger: {
// //         trigger: "#page2 #box",
// //         scroller: "body",
// //         markers: true,
// //         start: "top 60%"
// //     }
// // })

// gsap.from("#page3 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })

// gsap.from("#page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         marker: true,
//         start: "top 50%"
//     }
// })


// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 1,
//     x: -500,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         start: "top 50%"
//     }
// })


// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 1,
//     rotate: 720,
//     // scrollTrigger: "#page2 #box",
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub: 4, //스크롤을 거꾸로 하면 거꾸로 되감기됨.
//         pin: true, // 핀을 설정하면 box 요소가 스크롤이랑 같이 내려옴.
//     }
// })



gsap.from("#page2 h1", {
    transform: "translateX(-10%)",
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%",
        scrub: 2,
        pin: true,
    }
    // scale: 0,
    // delay: 1,
    // duration: 2,
    // rotate: 360,
    // // scrollTrigger: "#page2 #box",
    // scrollTrigger: {
    //     trigger: "#page2 #box",
    //     scroller: "body",
    //     markers: true,
    //     start: "top 60%"
    // }
})