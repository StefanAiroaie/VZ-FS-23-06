import express from "express"
import fs from "fs/promises"


const port = 3500
const app = express()



app.use(express.static("public"))
// app.use(express.static(__dirname + '/public'));

// app.get("/", (req, res) => {
//     res.sendFile("/index.html")
// })



app.listen(port, () => {
    console.log(`server started on port : ${port} -> http://localhost:${port}`);
})





/*Alege o persoană pe care o admiri și creează un site web unde să găsești informații despre această persoană. Aceasta poate fi un autor, muzician, o celebritate sau cineva pe care îl cunoști personal.

În această exercițiu, vom folosi Express pentru a crea site-ul web. Construiește rutarea folosind metodele de rutare disponibile și asigură-te că fiecare cerere oferă conținut static.

Site-ul tău ar trebui să aibă cel puțin patru pagini:

- O pagină de acasă care îi întâmpină pe vizitatori și oferă linkuri către alte pagini.
- O pagină "Despre" care conține o biografie scurtă a persoanei.
- O pagină "Opera" unde sunt prezentate lucrările persoanei, cum ar fi cărți, muzică sau artă.
- În final, o pagină "Galerie" unde se găsesc câteva imagini ale persoanei sau ale lucrărilor sale. */