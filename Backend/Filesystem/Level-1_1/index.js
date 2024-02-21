import { error } from "console";
import fs, { rename, rmdir, unlink } from "fs"
import { access, constants } from "fs"
import path from "path";


// Ändere den Textinhalt der Datei "blog1.txt" in “Ich bin ein Webdeveloper”
fs.writeFile("blog1.txt", "I am an deweloper" + "\n", { flag: "w" }, (err) => {
    if (err) {
        console.error(err);
        return
    }
    console.log("i am an developr was chaged");
})


// Erstelle eine neue Datei "blog2.txt" und trage dort einen beliebigen Text ein.
fs.writeFile('blog2.txt', 'Iv`e created a new txt file' + '\n', { flag: 'a' }, (err) => {
    if (err) {
        console.error(err)
    }
    console.log("ich habe ein neuen blog.txt erstellt");
})

//Überprüfe, ob der Ordner "assets" bereits existiert. Falls ja, lösche diesen.
// fs.access('./assets', constants.F_OK, (err) => {
//     (err) ? console.log("FOLDER assets dosen`t exist") : console.log("FOLDER assets exist")
// })

fs.access("./assets", constants.F_OK, (err) => {
    if (err) {
        console.log("FOLDER assets dosen`t exist")
    }
    else {
        rmdir('./assets', (err) => {
            if (err) {
                console.error(err)
            }
        })
        console.log("Folder Assets was deleted");
    }
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.error(err);
        }
        console.log("assets folder was created");
    })
})


fs.access('./assets/delete.txt', constants.F_OK, (err) => {
    if (err) {
        console.log("delete.txt dosent exist");
    }
    else {
        unlink('./assets/delete.txt', (err) => {
            if (err) {
                console.log("the existing file was delted");
            }
        })

    }
    fs.writeFile('./assets/delete.txt', "", { flag: "w" }, (err) => {
        if (err) {
            console.error(err)
        }
        console.log("detele.txt was created");
    })
})


fs.writeFile("Hello.txt", "some text", { flag: "a" }, (err) => {
    if (err) {
        console.error(err);
    }
    console.log("Hello.txt was created");
})

rename("Hello.txt", "HelloNew.txt", (err) => {
    if (err) throw err
    console.log("the file was renamed");
})


// Überprüfe, ob die Datei "delete.txt" bereits existiert. Falls ja, lösche diese.
// Erstelle eine Datei namens „delete.txt“.
// unlink('./delete.txt', (err) => {
//     if (err) {
//         fs.writeFile('./delete.txt', '', { flag: "a" }, (err) => {
//             if (err) {
//                 console.error(err);
//             }
//             console.log("delete.txt was created");
//         })
//     }
//     return console.log("the file(delete.txt) was deleted");
// })





/*
Creează în folderul proiectului tău un fișier cu numele „blog1.txt“. În acesta ar trebui să scrie „Hello World“.
Execută acum următorii pași. Totuși, nu manual prin terminal sau interfață grafică, ci cu ajutorul funcțiilor predefinite din sistemul de fișiere al Node.js:

Schimbă conținutul textului fișierului "blog1.txt" în „Sunt un dezvoltator web“.
Creează un nou fișier "blog2.txt" și introdu acolo un text la alegere.


Verifică dacă folderul "assets" există deja. Dacă da, șterge-l.
Creează un nou folder "assets".


Verifică dacă fișierul "delete.txt" există deja. Dacă da, șterge-l.
Creează un fișier numit „delete.txt“.

Creează un fișier numit "Hello.txt" și introdu acolo un text la alegere. Redenumește apoi fișierul în "HelloWorld.txt".
Sfat: Pașii 4 - 7 se referă la instrucțiuni condiționale, adică capacitatea de a verifica dacă ceva există deja, pentru a putea continua cu alte comenzi.
*/