const zahlen = [12, 25, 7, 18, 30, 5];



function sortnumbers() {
    let small = zahlen.filter(num => num <= 20)
    return small;
}

let numbersunter20 = sortnumbers()
console.log(numbersunter20);


const doublle = numbersunter20.map(doubleThisNumbers)


function doubleThisNumbers(num) {
    return num * 2
}
console.log(doublle);



