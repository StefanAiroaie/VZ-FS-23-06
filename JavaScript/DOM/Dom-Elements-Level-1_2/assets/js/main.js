
let allDivs = document.querySelectorAll(".example")

function myFunction() {
    allDivs.forEach(function (textAusDiv) {
        textAusDiv.classList.toggle("example2")
    });

}

