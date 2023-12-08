
console.log("test");



function minus() {
    const alter1 = document.querySelector("#alte1").value
    const alter2 = document.querySelector("#alte2").value
    const result = document.querySelector(".result")
    result.innerHTML += `${alter1 - alter2} "hier ist dein nummer`
}