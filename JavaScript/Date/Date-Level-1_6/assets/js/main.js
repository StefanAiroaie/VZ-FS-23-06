

function check(datumToCheck) {
    let datum = new Date(datumToCheck);
    var dayOfWeek = datum.getDay();

    if (dayOfWeek == 0 || dayOfWeek == 6) {
        return "Weekend";
    } else {
        return "Arbeitstag";
    }
}

console.log(check("12.15.2019"));
console.log(check("2.16.2001 "));
console.log(check("2.1.2020"));
console.log(check("2.29.2020"));
