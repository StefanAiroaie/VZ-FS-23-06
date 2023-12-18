/*

Lernziel: Verstehen und Anwenden der Array-Methode push().
Erstelle ein Array und ergänze es mit der Array-Methode push(). Mit push() kannst du einen oder mehrere Werte gleichzeitig an das Ende eines Arrays hinzufügen.
Verwende push(), um mindestens 2 neue Werte zu deinem Array hinzuzufügen.
Verwende console.log(), um den Inhalt und die Länge deines Arrays vor und nach dem Hinzufügen neuer Werte anzuzeigen. Beobachte die Veränderungen in der Konsole.
*/


let person = ["Stefan", "Marian", "Fabian"]
let friends = ["Sergiu", "Marius", "Marvin"]
let favoriteFood = ["Pizza", "Pommes", "Döner"]

console.log(person);
console.log(person.push("Marius", "Adam"))
console.log(person);


console.log(friends);
console.log(friends.push("George", "Maria"))
console.log(friends);


console.log(favoriteFood);
console.log(favoriteFood.push("Pasta", "Avoscado"))
console.log(favoriteFood);