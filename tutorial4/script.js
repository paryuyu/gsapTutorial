let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out",
    })

})

imageDiv.addEventListener("mouseenter", (dets) => {
    cursor.innerHTML = "View more"
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ffffff80"
    })

})


imageDiv.addEventListener("mouseleave", (dets) => {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#ffffff"
    })
})