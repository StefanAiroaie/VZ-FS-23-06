


function pass() {
    let check = document.querySelector("#input").value
    let output = document.querySelector(".result")
    checkpass = check.length
    console.log(check);
    checkpass >= 8
        ? (output.innerHTML = "Welcome", output.style.color = "green")
        : (output.innerHTML = "pass to short", output.style.color = "red")
}
