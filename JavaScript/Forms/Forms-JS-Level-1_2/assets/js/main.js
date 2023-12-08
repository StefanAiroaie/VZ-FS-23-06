
console.log("test");



function alter() {
    const geburtJahr = document.querySelector("#num").value
    const alter = document.querySelector(".result")
    alter.innerHTML += `Du bist ${2023 - geburtJahr} jahre alt`

}
