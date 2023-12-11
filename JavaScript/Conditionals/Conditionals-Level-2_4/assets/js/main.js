
/*

Schreibe eine Funktion mit zwei Parametern (Zahlen).
Die Funktion soll die Summe dieser Zahlen berechnen.
Wenn beide Parameter gleich sind, soll sie (Summe * 5) ausgeben.

*/


function vergleich(num1, num2) {
    if (num1 === num2) {
        console.log((num1 + num2) * 5);
    }
    else {
        console.log("die numbers sind nicht gleich");
    }

}

vergleich(33, 33)
vergleich(23, 443)
vergleich(555, 555)
vergleich(333, 33)