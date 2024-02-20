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


console.log(FirstLetterToUppercase("magic"));