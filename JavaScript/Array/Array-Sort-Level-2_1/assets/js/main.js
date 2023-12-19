let namen = ["Sergio", "Hannah", "Regallager", "Reliefpfeiler", "Rentner"]
console.log(namen);

const reverse = (word) => {
    let reversedWord = word.map(cuvant => cuvant.split("").reverse().join(""))
    console.log(reversedWord);
}

reverse(namen)


let text = ["Ella mag alle Bohnen", "han nesaH has ennaH"]

reverse(text)