


function sayHello() {
    console.log("Start: Warten für 3 secunde");
}
const textShow = () => setTimeout(sayHello, 3000)

console.log(textShow());





// let timerVariable = setInterval(myTimer, 1000)

// let timer2 = setInterval(VictorBleibMalWach, 1000)

/*

- Schreibe zuerst eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.
- Schreibe anschließend eine Funktion, die das Ergebnis der Vorschau ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.
*/

// - Schreibe zuerst eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.
// - Schreibe anschließend eine Funktion, die das Ergebnis der Vorschau ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.


function displayText(text, seconds) {
    setTimeout(function() {
        console.log(text)
    }, seconds * 1000)
}

function previewResult() {
    let counter = 0
    const interval = setInterval(function() {
        counter++
        if (counter === 5) {
            clearInterval(interval)
            displayText("Start: Warte für 5 Sekunden", 5)
        } else {
            console.log("Erledigt. Aber du hast 5 Sekunden Lebenszeit verschwendet.", 5)
        }
    }, 1000)
}

previewResult()

