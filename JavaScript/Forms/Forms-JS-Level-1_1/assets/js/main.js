
console.log("test");



function double() {
    const giveNum = document.querySelector("#num").value
    console.log(giveNum);
    const result = document.querySelector(".result")

    result.innerHTML += `${giveNum * 2} "hier ist dein nummer`

    console.log(giveNum * 2);
    console.log(result);


}



// `${giveNum} * 2 "<-- asta este rezutatul"`