//Level 1_1

const duplicateNumber = (numberToBeUsed) => {
    return new Promise((resolve, reject) => {
        //set timeout
        setTimeout(() => {
            // prufe ob number ist
            if (typeof numberToBeUsed === "number") {
                resolve(numberToBeUsed * 2)
            }
            else {
                reject("hei asta nu e numar")
            }
        }, 1000)
    })
}

console.log("hier ist funktion direct gerufen => Result:", duplicateNumber(5));

duplicateNumber(5)
    .then((result) => {
        console.log("hier ist funktion mit then => Result:", result);
    }).catch((reject) => {
        console.log("hei hier ist kein nummer", reject);
    });

duplicateNumber("5f")
    .then((result) => {
        console.log("hier ist funktion mit then => Result:", result);
    }).catch((reject) => {
        console.log("hei hier ist kein nummer", reject);
    });



