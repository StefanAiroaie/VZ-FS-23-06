const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];


function sortworter(parameter) {
    let wortsmalleras6 = parameter.filter(word => word.length <= 6)
    return wortsmalleras6
}

let worterUnter6 = sortworter(woerter)
console.log(worterUnter6);

