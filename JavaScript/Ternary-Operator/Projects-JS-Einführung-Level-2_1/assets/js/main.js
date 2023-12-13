


function message() {
    let message = document.querySelector("#input").value
    let output = document.querySelector(".result")
    let error = document.querySelector(".error")
    checkmessage = message.length
    console.log(message);
    checkmessage == ""
        ? (error.innerHTML = "you musst ein messsage eingeben", error.style.color = "red")
        : (output.innerHTML = message, output.style.color = "red")
}



//