
/*
Lernziel: Dom-Manipulation unter Verwendung einer Function. Datum und Uhrzeit anzeigen. Werte aus einem Inputfeld im HTML ausgeben.
Verwende den Code der vorherigen Aufgabe Level 1_2.
Erstelle ein Input-Feld und einen Button im HTML.
Erstelle eine Function, die die Eingabe aus einem Textfeld erfasst und dann diesen Text im HTML-Dokument anzeigt.
Schreibe in der Function ein zusätzliches Statement: document.getElementById("test").innerHTML = "<h1>Hello h1<h1>";
Verwende .innerHTML, um das Datum hinzuzufügen: Date.
*/




let welcome = "Hello Wolrd";
let question01 = "How are you?";

console.log(welcome);
console.log(question01);

let textSecond = "start of the element";

// document.getElementById("info").innerHTML = (`<h1>${welcome}</h1><h2>${question01}</h2>`);


document.getElementById("info").innerHTML = (`<h1>${welcome}</h1>`);
document.getElementById("info").innerHTML += (`<h2>${question01}</h2>`);


document.getElementById("container").innerHTML = (`<p>${textSecond}</p>`);

document.write("end of the element");

let inputValue = document.querySelector("#inputText");

function showInputText() {
    // hier nimm man text auf input
    let inputTextVar = document.querySelector("#inputText").value;
    // hier zeigt man text aus imput in html
    document.querySelector(".showValue").innerHTML = ("<h2>Hier ist dein input TEXT-ANZEZEIGT --> " + inputTextVar + " <--</h2>");
    //hier ein andere text in html angezeigt
    document.getElementById("test").innerHTML = "<h1>Hello h1<h1>"
    //hier zeigt man curent datum
    document.querySelector("h4").innerHTML = Date();
    //hier ist auch in console the imput text angezeitgt
    console.log(inputTextVar);
}














