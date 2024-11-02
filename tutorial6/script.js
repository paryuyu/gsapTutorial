function breakTheText() {
    let h1 = document.querySelector("h1")
    let h1TExt = document.querySelector("h1").textContent;
    let splitedText = h1TExt.split("");
    let clutter = "";

    let halfValue = Math.floor(splitedText.length / 2);
    console.log(halfValue)
    splitedText.forEach((elem, idx) => {

        if (idx < halfValue) {
            clutter += `<span class="a">${elem}</span>`
        } else {
            clutter += `<span class="b">${elem}</span>`

        }
        // console.log('hello')
        // clutter += `<span class="a">${elem}</span>`;
    })
    h1.innerHTML = clutter
}

breakTheText()

// gsap.from("h1 span", {
//     y: 40,
//     duration: 0.4,
//     delay: 0.5,
//     stagger: 0.2,
//     opacity: 0,
// })

gsap.from("h1 .a", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
})


gsap.from("h1 .b", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0

})