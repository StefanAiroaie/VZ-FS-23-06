/*Es geht darum, zu üben Variablen zu erstellen, diese auszugeben und miteinander zu kombinieren.
Erstelle dazu 1. eine Variable mit dem Namen carName, und weise ihr den Wert BMW zu. Gib die Variable mit der Konsole aus.
Erstelle 2. eine Variable mit dem Namen x, und weise ihr den Wert 150 zu. Gib die Variable mit der Konsole aus. Erstelle eine Variable mit dem Namen y, und weise ihr den Wert 50 zu. Gib die Variable mit der Konsole aus. Erstelle eine Variable mit dem Namen z, und weise ihr den Wert x+y zu. Gib die Variable mit der Konsole aus.
3. Deklariere drei Variablen mit den folgenden Namen und Werten: let firstName; let lastName; let age; firstName = "John"; lastName = "Doe" und age = 35. Gib die Variablen mit der Konsole aus.*/





let carName = "BMW";
console.log(carName);
let x = 150;
let y = 50;
let z = x + y;

console.log(x);
console.log(y);
console.log(z);

let firstName = "John";
let lastName = "Doe";
let age = 35;

console.log(`${firstName} ${lastName} is ${age}`);



document.querySelector('#output').innerHTML = (`${firstName} ${lastName} is ${age} old.`);





