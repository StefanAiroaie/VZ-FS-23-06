/*ernziel: Funktionalität der Konsole im Browser und Basiswissen zu Variablen. Bonus: einen Wert ins HTML schreiben.
Übernimm den vorgegebenen JS-Code (siehe Code-Snippet) und sieh dir das Ergebnis mithilfe des console.log()-Befehls an. Starte deinen Liveserver, um in der Konsole des Chrome-Browsers das Ergebnis zu sehen.
Gib dann ein "Hello World" in der Konsole aus. Deklariere die Variable firstName mit dem Wert "Anton" und die Variable age mit dem Wert 28. Zeige nun beide Variablen in der Konsole an.
Deklariere die Variable job mit dem Wert "Trainer:in" und gib sie in der Konsole aus. Deklariere danach die Variable married mit dem Befehl: let married = true; und gib die Variable dann in der Konsole aus.
Zum Schluss gib alle vorher deklarierten Variablen in einem kombinierten Satz in der Konsole aus, sodass es folgendermaßen aussieht: "Anton ist 28 Jahre alt, von Beruf Trainer:in und ist verheiratet: true."*/

// console.log(name + “ ist “ + age + “ Jahre alt “....)

/*Verwende den bereits im ersten Schritt kopierten JS-Code. Versuche dann, den Wert von "b" im HTML-Dokument anzuzeigen. Dazu erstelle zuerst ein HTML-Element mit der ID "output". Nutze anschließend den Befehl document.querySelector('#output').innerHTML = b; um "b" in diesem Element auszugeben.*/


// 1. Beispiel

let a = 12;
let b = a * 3;
console.log(b);
document.querySelector('#output').innerHTML = ("ergebnise ist " + b);

let helloWorld = "Hello World";

let firstName = "Anton";
let age = 28;
let job = "Trainer:in";
let married = true;

console.log(helloWorld);
console.log(firstName);
console.log(age);
console.log({ job });
console.log(married);
console.log(firstName + " ist " + age + " Jahre alt, von Beruf " + job + " und ist verheratet: " + married);


