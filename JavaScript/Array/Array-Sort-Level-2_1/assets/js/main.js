/*
- Schreibe ein kleines Programm, das Zeichenketten umkehrt.
- Diese Funktion soll jeden String, der ihr übergeben wird umdrehen können (nutze einen Parameter).
- Du wirst Array-Methoden verwenden müssen, um den String umzudrehen.
- Rufe die Funktion mit deinem Namen als Parameter auf.
- Überprüfe das Ergebnis in der Konsole.
- Versuche diese Begriffe umzukehren: Sergio, Hannah, Regallager, Reliefpfeiler und Rentner.
- Versuche diese Sätze umzukehren: "Ella mag alle Bohnen" und "han nesaH has ennaH".

- Wenn es mehrere Wörter gibt: Drehe jedes Wort einzeln um.
- Tipp: Du musst schauen, ob es in der übergebenen Zeichenkette mehrere Wörter gibt!
*/



let namen = ["Sergio", "Hannah", "Regallager", "Reliefpfeiler", "Rentner"]
let text = ["Ella mag alle Bohnen", "han nesaH has ennaH"]

function drehen(parameter) {
    parameter.reverse()
    console.log(parameter);
}

drehen(namen)