

console.log("test");
function checkAirQuality() {
    let range = document.getElementById("range").value
    console.log(range);
    let output = document.querySelector(".output")
    let span = document.querySelector(".span")
    span.innerHTML = range

    if (range <= 50) {
        output.innerHTML = "<h2>Good Level of health effect:</h2><h2>Little or no risk</h2>"
        document.querySelector("body").style.backgroundColor = "green"
        
    }
    else if (range >= 51 && range <= 100) {
        output.innerHTML = "<h2>Moderate Level of health effect:</h2><h2>Good Level of health effect: Acceptable qualit4y</h2>"
        document.querySelector("body").style.backgroundColor = "yellow"
    }

    else if (range >= 101 && range <= 150) {
        output.innerHTML = "<h2>Unhealthy for sensitive groups Level of health effect:</h2><h2>Generable publics not likely affected</h2>"
        document.querySelector("body").style.backgroundColor = "orange"

    }
    else
        output.innerHTML = "pana mea"
}
