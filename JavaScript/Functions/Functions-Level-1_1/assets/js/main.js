/*
Deklariere die Funktion intro(). Im Funktionskörper {} passiert nun Folgendes:
Deklariere die Variable a mit dem Wert 1 + 3.
Gib zusätzlich "Hello World" in der Konsole aus.
Gib den String “1+3 = “ + a in der Konsole aus.
Wichtig! Um das Ergebnis sehen zu können, musst du die Funktion im Anschluss noch aufrufen.*/

/* Schaue hier gerne nochmal nach, wie eine Funktion deklariert wird: https://wiki.selfhtml.org/wiki/JavaScript/Funktion#Funktionsdeklaration_als_Statement und https://www.w3schools.com/js/js_functions.asp.
Hier findest du einen kleinen Spickzettel, mit welchen Tastenkombinationen du geschweifte Klammern, spitze Klammern eetc. setzt: https://www.die-tastenkombination.de/tastenkombinationen-fuer-eckige-geschweifte-und-spitze-klammern.html. */

function intro() {
    let a = 1 + 3;
    console.log("Hello World");
    console.log("1 + 3 = " + a);
}
intro()