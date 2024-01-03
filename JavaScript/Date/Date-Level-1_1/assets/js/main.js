/*
- Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.
- Speichere die Werte in Variablen (date1, date2, usw.).
- Verwende innerHTML, um das Ergebnis darzustellen.
- Teste die folgenden Werte:  new Date("September 2, 2019 09:00:00")  new Date(0)  new Date(31556908800)  new Date(86400000)
*/

let date1 = Date()

const div = document.createElement("div")
document.body.appendChild(div)
div.innerHTML = date1

let date2 = new Date("September 2, 2019 09:00:00")
div.innerHTML += "<br>" + date2

let date3 = new Date(0)
div.innerHTML += "<br>" + date3

let date4 = new Date(31556908800)
div.innerHTML += "<br>" + date4

let date5 = new Date(86400000)
div.innerHTML += "<br>" + date5