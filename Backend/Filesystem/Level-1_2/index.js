import fs from "fs"
import data from './data.json' assert {type: 'json'};
// import data from "./data.json" with { type: "json" };


console.log(data);

data.forEach(element => {
    fs.writeFile('newDoc.txt', element.id + " - " + element.title + "\n" + element.description + "\n", { flag: "a" }, (err) => {
        if (err) {
            console.error(err);
            return
        }
        console.log("one line was adet");
    })

});

