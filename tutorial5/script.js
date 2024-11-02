let main = document.querySelector("#main");
let tl = gsap.timeline({ pause: true });
let menu = document.querySelector("#menu")
let close = document.querySelector("#close")

tl.to("#full", {
    right: 0,
    duration: 0.8,
})

tl.from("#full h4", {
    x: 140,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0
})

tl.from("#full i", {
    opacity: 0
})

tl.pause();

menu.addEventListener("click", () => {
    tl.play()
})

close.addEventListener("click", () => {
    tl.reverse();
})