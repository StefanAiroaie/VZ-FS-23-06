
/*

Erstelle ein HTML-Formular zur Eingabe der Wetter-Qualität in Zahlen von 0 bis 10.
Deklariere die Funktion weather(), nutze im Funktionskörper Conditional Statements (if...else) und gebe die Ergebnisse im HTML aus:
Bei einer Qualität zwischen 8 und 10 soll das Ergebnis 'super' sein.
Bei einer Qualität zwischen 6 und 7 soll das Ergebnis 'gut' sein.
Bei einer Qualität zwischen 3 und 5 soll das Ergebnis 'okay' sein.
Bei einer Qualität zwischen 0 und 2 soll das Ergebnis 'schlecht'.
*/

function wetter() {
    let input = document.querySelector(".inputField").value
    let result = document.querySelector(".result")

    if (input <= 0 && input <= 2) {
        result.innerHTML = "Wetter soll schlect sein"

    }
    else if (input >= 3 && input <= 5) {
        result.innerHTML = "Wetter soll okay sein"
    }
    else if (input >= 6 && input <= 7) {
        result.innerHTML = "Wetter soll gut sein"
    }
    else if (input >= 8 && input <= 10) {
        result.innerHTML = "Wetter soll super sein"
    }
    else {
        result.innerHTML = "bitte ein nummer von 0 bis maximal 10 eingeben"
    }

}
