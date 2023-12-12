/*
Nun beschäftigtst du dich mit string-Methoden. Dahinter stecken Methoden, um Zeichenketten - strings - zu analysieren und mit ihnen zu arbeiten.
So kannst du beispielsweise die Länge eines strings herausfinden oder strings miteinander verbinden.
Im ersten Schritt sollst du dir zwei Variablen erstellen: firstName und lastName.
Lasse dir nun die Länge der beiden Variablen in der Konsole anzeigen. Nutze dafür .length.
Erstelle noch eine Variable fullName, die die Summe der beiden Variablen ist.
Im Anschluss sollst du dir die Länge der Variable fullName in der Konsole anzeigen lassen.
*/



let firstName = "Stefan"
let lastName = "Valentin"
let fullName = (firstName.concat(" " + lastName))

console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);
console.log(fullName);