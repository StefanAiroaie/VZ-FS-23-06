
let maxwidth = window.innerWidth
let cat = document.querySelector("#cat")
let catstart = 0
let catEnd = maxwidth - 304
console.log(catEnd);
// let catend = maxwidth




const animateCatInainte = () => {
    catstart++
    cat.style.left = `${catstart}px`
}

const animateCatInapot = () => {
    catstart--
    cat.style.left = `${catstart}px`

}
let catWalk = () => {
    setInterval(animateCatInainte, 10)
    if (catstart == catEnd) {
        turn()
        pause()
    }
}

trainSpeed = setInterval(animateCat, 1100)

// }


let turn = () => cat.style.transform += "scaleX(-1)"

let pause = () => clearInterval(trainSpeed)
console.log("aici", catstart);

console.log(maxwidth);







/*
let maxwidth = window.innerWidth
let cat = document.querySelector("#cat")
let catstart = 0
let catEnd = maxwidth - 304
console.log(catEnd);
// let catend = maxwidth


let catWalk = () => {
    let animateCat = () => {
        catstart++
        cat.style.left = `${catstart}px`
        console.log("aici e in functie", catstart);
        if (catstart == catEnd) {
            turn()
            pause()
        }
    }

    trainSpeed = setInterval(animateCat, 10)

}


let turn = () => cat.style.transform += "scaleX(-1)"

let pause = () => clearInterval(trainSpeed)
console.log("aici", catstart);

console.log(maxwidth);

*/