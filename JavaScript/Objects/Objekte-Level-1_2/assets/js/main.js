let person = {}

person.name = "Stefan Airoaie"
person.alter = 37

function sagNameAlter() {
    alert(`Eu sunt ${person.name} si am ${person.alter} ani`)
}

console.log(person.name);
console.log(person.alter);
sagNameAlter()


/*
- Erstelle ein Object und speichere es in einer Variable namens person.
- Deklariere die Eigenschaft name mit dem Wert deines Namens.
- Deklariere die Eigenschaft alter mit dem Wert deines Alters.
- Deklariere eine Function sagNameAlter im Object.
- Nutze den Befehl alert() im Funktionskörper um name & alter anzuzeigen.
- Gib in der Konsole name und alter aus.
- Rufe die Function sagNameAlter aus dem Object auf.
*/