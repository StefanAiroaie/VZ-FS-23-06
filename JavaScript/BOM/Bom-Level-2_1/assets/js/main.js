


const message = document.querySelector(".message")
const start = document.querySelector("#count")
let n = 10
function count() {

    if (n > 0) {
        n -= 1
        start.innerHTML = n
    }
    if (n == 0) {
        message.style.display = "none"
    }
}

setInterval(count, 1000)