/*
Es geht weiter mit dem Befehl slice(). Slice extrahiert Inhalte der Variable und gibt es in Form eines Arrays zurück.
Probiere es mit const A = 'Susi is going to codingschool' aus und wende slice() an, um in deinem HTML Folgendes angezeigt zu bekommen:
Susi
is
is going to school
school
Susi is school
Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"
"), um das Ergebnis im Dokument auszugeben. myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.
*/

const A = 'Susi is going to codingschool'

let var1 = A.slice(0, 4)
console.log(var1);
let var2 = A.slice(5, 7)
console.log(var2);
console.log(A.length);
let var3 = A.slice(8, 13)
console.log(var3);
let var4 = A.slice(14, 16)
console.log(var4);
let var5 = A.slice(23, 29)
console.log(var5);


document.write(var1 + " " + "<br>")
document.write(var2 + " " + "<br>")
document.write(var2 + " " + var3 + " " + var4 + " " + var5 + "<br>")
document.write(var5 + " " + "<br>")
document.write(var1 + " " + var2 + " " + var5 + "<br>")
