/* Lernziel: mit JavaScript die Struktur und den Inhalt einer Webseite ändern (DOM-Manipulation).
Schreibe mithilfe des Befehls document.write() Folgendes in dein HTML-Dokument: Eine h1 mit “Hello World!” und ein p-Element mit “Have a nice day!”.
Deklariere die Variable myText und fülle sie mit “Hello again”. Schreibe die Variable anschließend in dein Dokument.
Deklariere Variablen: vorname, nachname und fülle sie mit deinem Namen. Schreibe sie anschließend in dein Dokument, sodass folgender Satz erscheint: "Hi, ich bin SuperCoder:in". */






document.write("<h1>Hello Wolrd</h1>");
document.write("<p>Have a nice day</p>");

let myText = "Helo again";
let nachName = "Airoaie";
let vorName = "Stefan";
let text = `Hi ich bin ${vorName} ${nachName}`

document.write(`<p>${myText}</p>`);
document.write(`<p>${text}</p>`);













