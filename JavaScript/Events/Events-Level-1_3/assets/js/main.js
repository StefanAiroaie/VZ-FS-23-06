
function changeColor() {
    const divs = document.querySelectorAll(".card")
    divs.forEach(box => {
        box.addEventListener("click", () => {
            box.style.background = "black"
            box.style.color = "white"
        });
    })
}
