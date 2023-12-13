


function age() {
    let age = 18
    let check = document.querySelector("#input").value
    let result = document.querySelector(".result")
    check >= 18
        ? result.innerHTML = "volljährig"
        : result.innerHTML = "minderjährig"
}
