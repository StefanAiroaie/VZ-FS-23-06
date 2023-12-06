/* Lernziel: Mit Javascript die Struktur und den Inhalt einer Webseite ändern (DOM-Manipulation).
Es gibt auch noch eine andere Variante, um Inhalte mit JS in dein HTML-Dokument zu schreiben. Mit .innerHTML kannst du Inhalte in dein HTML-Element oder ganze HTML-Elemente hinzufügen.
Verwende den vorgegebenen HTML-Code (siehe Code-Snippet) und erstelle mit document.getElementById(“info”).innerHTML eine h1 mit dem Text “Hello World”. Füge noch eine h2 hinzu mit dem Text “How are you?”. Siehe dir anschließend das Ergebnis über den Liveserver an.
Jetzt arbeitest du weiter mit dem Code und fügst im HTML noch ein <div> mit der ID “container” ein. Nutze document.write() und .innerHTML, um jeweils Inhalte in dein HTML zu schreiben. Nutze document.getElementById('container').innerHTML, um einen <p>-Tag mit dem Text “start of the element” zu kreieren. Schreibe nun document.write("end of the element"). Analysiere das Ergebnis im Liveserver.*/

// Mit document.write() fügt man immer am Ende des HTML-Dokuments die Inhalte hinzu.








let welcome = "Hello Wolrd";
let question01 = "How are you?";

console.log(welcome);
console.log(question01);

let textSecond = "start of the element";

// document.getElementById("info").innerHTML = (`<h1>${welcome}</h1><h2>${question01}</h2>`);


document.getElementById("info").innerHTML = (`<h1>${welcome}</h1>`);
document.getElementById("info").innerHTML += (`<h2>${question01}</h2>`);


document.getElementById("container").innerHTML = (`<p>${textSecond}</p>`);

document.write ("end of the element");







