


let maxwidth = window.innerWidth
let cat = document.querySelector("#cat")
let catstart = 0
let catEnd = maxwidth - 304
console.log(catEnd);
// let catend = maxwidth


let catWalk = () => {
    let animateCat = () => {
        catstart += 5
        cat.style.left = `${catstart}px`
        console.log("aici e in functie", catstart);
        if (catstart == catEnd) {
            turn()
            clearInterval(trainSpeed)
        }
    }

    trainSpeed = setInterval(animateCat, 10)

}


let turn = () => cat.style.transform += "scaleX(-1)"


let pause = () => clearInterval(trainSpeed)
console.log("aici", catstart);

console.log(maxwidth);

