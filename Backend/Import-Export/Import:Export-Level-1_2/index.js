import { numbers, names } from "./data.js"
import functions from "./functions.js";


console.log("sortFunc(numbers)", functions.sortFunc(numbers));
console.log("sortFunc(names)", functions.sortFunc(names));

console.log("functions.firstEllement(names)", functions.firstEllement(names));
console.log("functions.allMinusLast(names)", functions.allMinusLast(names));
console.log("functions.onlyLast(names)", functions.onlyLast(names));
console.log("functions.allMinusFirst(names)", functions.allMinusFirst(names));


console.log("functions.sumFunc(numbers)", functions.sumFunc(numbers));

console.log("functions.toUpCasefunc(names)", functions.stringToUppercase(names));

// angepasst mit map an array mit lowercase
console.log(functions.firstLetterToUppercase(names));


console.log(functions.removeDuplicate(numbers));

console.log("remove Eric from array", functions.removeWord(names, "Eric"));


console.log(functions.lastLetterEgalFirstLetter("mac", "c"));
console.log(functions.lastLetterEgalFirstLetter("mac", "a"));

console.log(functions.randomNumberbetween(3, 9));