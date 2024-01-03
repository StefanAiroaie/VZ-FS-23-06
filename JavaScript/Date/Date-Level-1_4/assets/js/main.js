/*
- Schreibe eine Funktion, um die Anzahl der Tage in einem bestimmten Monat zu erhalten.
- Die Funktion bekommt zwei Parameter übermittelt: monat und jahr.
- berprüfe die Funktion mit folgenden Argumenten in der Konsole:
- console.log(tageImMonat(1, 2016)); //31
- console.log(tageImMonat(2, 2016)); //29
- console.log(tageImMonat(2, 2017)); //28
- console.log(tageImMonat(12, 2017)); //31
- Reminder: Parameter sind die von euch festgelegten Variablen(hier: monat und jahr), die in der Funktion deklariert werden. Argumente sind die Werte, die ihr von außen rein gebt. Also in diesem Fall zum Beispiel tageImMonat(1, 2016).
*/


const tageImMonat = (y, m) => new Date(m, y, 0).getDate();

- console.log(tageImMonat(1, 2016)); //31
- console.log(tageImMonat(2, 2016)); //29
- console.log(tageImMonat(2, 2017)); //28
- console.log(tageImMonat(12, 2017)); //31


