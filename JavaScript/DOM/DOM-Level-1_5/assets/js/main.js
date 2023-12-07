

/* In dieser Aufgabe sollst du eine Funktion schreiben, die ausgeführt wird, wenn du auf den Button "Zeige mir die URL!" klickst.
Filtere über die Funktion showURL() die URL der Seite heraus und lasse sie dir unterhalb des Buttons anzeigen.*/

// Google, wie du dir die URL ausgeben lassen kannst.


let url = window.document.URL;
console.log(url);

// let url = window.location.href;
// console.log(url);

function showURL() {
    console.log({ url });
    let div = document.querySelector("div");
    div.innerHTML = url
}





















