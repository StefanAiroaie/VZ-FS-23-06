
/*

Lernziel: Anwendung und Syntax von if/else-Statements in JavaScript, um bedingte Logik im Code zu integrieren
Wir benötigen eine Abfrage, um zu überprüfen, ob der Benutzer volljährig ist. Deklariere die Funktion adult().
Erstelle eine HTML-Datei mit einem Formular zur Eingabe des Alters und einem Button für die Überprüfung.
Im Funktionskörper:
Wenn das eingegebene Alter größer oder gleich 18 ist, gib true zurück.
Ist das eingegebene Alter kleiner als 18, gib false zurück.
Lass Dir das Ergebnis der Funktion im HTML in “Volljährig” oder “Minderjährig” ausgeben.
*/


// Verwende den Code aus der Aufgabe Level 1_1.
// Füge zu den Zusatzcode aus dem Code-Snippet hinzu.
// Ändere die Bedingung und schreibe (document.getElementById(‘input’).value >= 18).
// Wenn die Bedingung wahr ist, gib im HTML "Ja, Du kannst Shisha rauchen" aus.
// Wenn die Bedingung falsch ist, gib "Du darfst noch nicht Shisha rauchen" aus.
// Schreibe in die erste Zeile deiner Funktion: event.preventDefault();
// Es verhindert einen Link die URL zu öffnen.

function greaterThan() {
    event.preventDefault();
    // let alter = document.querySelector(".alterValue").value
    let input = Number(document.getElementById("input").value)
    console.log(typeof (input));
    let result = document.querySelector(".result")
    if (input >= 21) {
        result.innerHTML = "Ja, Du kannst Shisha rauchen"
    }
    else {
        result.innerHTML = "Du darfst noch nicht Shisha rauchen"
    }
}



/* <form name="form1" action="#">
Geben Sie Ihr Alter ein<input type="text" name="text1" id="input" />
<input type="button" value="Alter" onclick="greaterThan()" /> */