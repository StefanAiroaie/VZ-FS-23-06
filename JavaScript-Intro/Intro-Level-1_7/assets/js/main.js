

/*
Lernziel: Unterschied zwischen const und let.
Deklariere die untenstehenden Variablen mit korrekter Namenskonvention und der camelCase-Schreibweise.
Entscheide, ob du die Variablen mit let oder const deklarieren möchtest. Der Wert einer Konstanten (const) kann nicht verändert werden durch Zuweisung oder Neudeklaration, bei let kann wiederum ein neuer Wert hinzugefügt werden.
Nutze diese Beispiele: helloworld = Hello World, pi = 3.14, burjdubai = 828m, fullname = Jan Schmidt, eifeltower = 324m, camelcase = camelCase, kursstatus = true und wandle sie um in z.B. let helloWorld = "Hello World". */


let helloWorld = "Hello World";
const pi = 3.14;
const burjDubai = (824 + "m");
let fullName = ("Jan Schmidt");
const eifelTower = (324 + "m");
let kursStatus = false;

console.log(true);
console.log(false);
console.log(helloWorld);
console.log(pi);
console.log(burjDubai);
console.log(fullName);
console.log(eifelTower);
console.log("beide sind so hoch: ", burjDubai + eifelTower);



