



// catWalk()
// pause()
// turn()
// catSpeed()


let maxwidth = window.innerWidth
let cat = document.querySelector("#cat")
let catstart = 0
let catend = 1200
// let catend = maxwidth


let catWalk = () => {
    let animateCat = () => {
        catstart += 5
        cat.style.left = `${catstart}px`
        console.log("aici e in functie", catstart);
        if (catstart == 1200) {
            catstart += 5
            cat.style.top = `${catstart}px`
            console.log(catstart);
            console.log("aici e in functie", catstart);
        }
    }
    trainSpeed = setInterval(animateCat, 200)

    console.log(catend);

}

let pause = () => clearInterval(trainSpeed)
console.log("aici", catstart);

console.log(maxwidth);



// function startTrain() {
//     let animationTrain = () => {
//         leftPos += 10
//         train.style.left = `${leftPos}px`
//     }
//     trainInterval = setInterval(animationTrain, 100)

// }

// function stopTrain() {
//     clearInterval(trainInterval)
// }