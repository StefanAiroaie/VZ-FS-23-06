const zahlen = [12, 25, 7, 18, 30, 5];


let numbersunter20 = sortnumbers()
function sortnumbers() {
    let small = zahlen.filter(num => num <= 20)
    return small;
}

console.log(numbersunter20);


const doublle = numbersunter20.map(doubleThisNumbers)


function doubleThisNumbers(num) {
    return num * 2
}
console.log(doublle);



