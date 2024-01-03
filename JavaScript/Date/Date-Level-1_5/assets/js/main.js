/*
- Lernziel: Anwenden der JavaScript-Methode [getMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), um den Monat eines Datumsobjekts zu erfassen und den erhaltenen Wert zu analysieren.
- Schreibe eine Function, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
- Verwende den vorgegebenen Code (siehe Code-Snippet).
- Nutze getMonth() um die Aufgabe zu lösen.
- Überprüfe deine Function mit folgenden Argumenten für deine Parameter in der Konsole:
- console.log(monatsName("2001-3-4")); //März
- console.log(monatsName("2019-12-24")); //Dezember
- console.log(monatsName("1410-07-15")); //Juli

*/


let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];



function monatsName(dateString) {
    var date = new Date(dateString);
    var monthNumber = date.getMonth();
    return list[monthNumber];
}

console.log(monatsName("2001-3-4"));   // März
console.log(monatsName("2019-12-24"));  // Dezember
console.log(monatsName("1410-07-15"));  // Juli
