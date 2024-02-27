import express from "express"
import fs from "fs/promises"


const port = 3500
const app = express()



app.use(express.static("public"))


app.get("/stuff.html", (req, res) => {
    fs.readFile(("data.json"), { encoding: "utf-8" }).then((data) => {
        res.json(JSON.parse(data))
        console.log(data);
    })
    fs.writeFile("/stuff.html", { flag: a }, JSON.stringify(data)).then(() => {
        res.end();
    });
})

// app.post("stuff.html", (req, res) => {
//     fs.writeFile("stuf.html", { flag: "a" } => {
//         res.data
//     })
// })




// test 
// const apiLink = {
//     products: `https://ih-beers-api2.herokuapp.com/beers`,
//     detailProduct: `https://ih-beers-api2.herokuapp.com/beers/`,
//     randomProduct: `https://ih-beers-api2.herokuapp.com/beers/random`
// }


// fetch(apiLink.products)
//     .then(response => response.json())
//     .then(data => {
//         fs.writeFile("/stuff.html", JSON.stringify(data))
//             .catch(error => console.error('Error:', error));
//     })



app.listen(port, () => {
    console.log(`server started on port : ${port} -> http://localhost:${port}`);
})


/** dishes.push(newDish);
    fs.writeFile("./dishes.json", JSON.stringify(dishes)).then(() => {
      res.end(); */


/*Alege o persoană pe care o admiri și creează un site web unde să găsești informații despre această persoană. Aceasta poate fi un autor, muzician, o celebritate sau cineva pe care îl cunoști personal.

În această exercițiu, vom folosi Express pentru a crea site-ul web. Construiește rutarea folosind metodele de rutare disponibile și asigură-te că fiecare cerere oferă conținut static.

Site-ul tău ar trebui să aibă cel puțin patru pagini:

- O pagină de acasă care îi întâmpină pe vizitatori și oferă linkuri către alte pagini.
- O pagină "Despre" care conține o biografie scurtă a persoanei.
- O pagină "Opera" unde sunt prezentate lucrările persoanei, cum ar fi cărți, muzică sau artă.
- În final, o pagină "Galerie" unde se găsesc câteva imagini ale persoanei sau ale lucrărilor sale. */