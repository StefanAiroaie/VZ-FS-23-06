
// import data from "./data.json"
import data2 from './public/assets/data.json'
const data = [
    {
        "Email": "info@info.de",
        "Name": "Marius Anton"
    }
    , {
        "Email": "info2@info.de",
        "Name": "Marius2 Anton2"
    }
]

console.log("hei ist embed");



const infos = document.querySelector(".infos")
data.map(info => {
    const infoCard = document.createElement("div")
    infoCard.innerText = `hei hier sind daten ${info.Email} & ${info.Name}`
    infos.appendChild(infoCard)
    console.log(info.Email);
})


console.log(data2);