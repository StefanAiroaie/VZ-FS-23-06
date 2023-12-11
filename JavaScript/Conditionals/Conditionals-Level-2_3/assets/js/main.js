
/*

Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten.
Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2.
Lass dir das Ergebnis in der Konsole ausgeben.
Teste die Nummern: 35, 74, 123.

*/


function calculator(value) {
    let sum1 = value - 27
    if (sum1 > 27) {
        console.log((value - 27) * 2);
    } else{
    console.log('hei numer ist kleiner als 27');
    }
}

calculator(35)
calculator(74)
calculator(123)
console.log("numar mai <");
calculator(12)
console.log("numar mai >");
calculator(100)