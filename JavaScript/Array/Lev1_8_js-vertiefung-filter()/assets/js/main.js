const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

geradeZahlen = zahlen.filter(numarul => numarul % 2 == 0)
console.log("gerade zahlen = " + [geradeZahlen]);


ungeradeZahlen = zahlen.filter(numarul2 => numarul2 % 2 !== 0)
console.log("ungerade zahlen = " + [ungeradeZahlen]);