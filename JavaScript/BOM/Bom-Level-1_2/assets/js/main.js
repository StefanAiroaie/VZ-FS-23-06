

function clickToStart() {
    const start = document.querySelector(".zeit")
    let n = 100
    function count() {
        if (n > 0) {
            n -= 1
            start.innerHTML = `${n}%`
        }
    }
    setInterval(count, 100)

}
