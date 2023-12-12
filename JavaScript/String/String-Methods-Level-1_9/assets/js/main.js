/*
Neben der Methode Strings mit Operatoren zu verbinden, kann man auch den Befehl concat() nutzen.
Erstelle dir die drei Variablen const text1 = "Sam is going to codingschool", const text2 = "Susi" und const text3 = "and".
Erzeuge nun mit concat() folgende Ausgaben in deinem HTML-Dokument. Nutze alle Methoden, die du bereits gelernt hast:
Sam is going to school and to the movie theater
Sam is going to the movie theater
Susi and Sam are going to school
Susi and Sam are going to gym and to the movie theater
Susi is going to school and to the movie theater
*/

const text1 = "Sam is going to codingschool"
const text2 = "Susi"
const text3 = "and"
const text4 = "to the movie theater"


let var1 = text1.replace("codingschool", "school")
let var2 = var1.concat((" " + text3 + " " + text4))
let var3 = text2.concat((" " + text3 + " " + var1)).replace("is", "are")
let var4 = var3.concat(" " + " " + text3 + " " + text4).replace("school", "gym")
let var5 = var2.replace("Sam", "Susi")
document.write(var1 + "<br>")
document.write(var2 + "<br>")
document.write(var3 + "<br>")
document.write(var4 + "<br>")
document.write(var5 + "<br>")



