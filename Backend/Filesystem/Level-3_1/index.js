import fs, { mkdir } from "fs"
import { access, constants } from 'node:fs';



const checkFile = "files/doc.txt"


mkdir("files", (err) => {
    if (err) {
        console.error(err, "ja ist da aber ich mache weiter");
    }
    console.log("files folder was created");
})

const checkFileFunc = (paramTextToFile) => {
    access(checkFile, constants.F_OK, (err) => {
        if (err) {
            console.log("file dosent Exist");
        }
        fs.writeFile("./files/doc.txt", paramTextToFile + '\n', { flag: "a" }, (err) => {
            if (err) {
                console.error(err);
            }
            console.log("The doc.txt was created");
        })
    })
}

checkFileFunc("some text to be added")



/*
- În această exercițiu, scopul este să verifici dacă un fișier .txt există deja. Dacă nu există, ar trebui creat. Dacă există deja, o nouă linie ar trebui adăugată în fișier folosind un parametru. Procedează pas cu pas:
- Folosind sistemul de fișiere din Node.js, creează un subdirector în cadrul folderului proiectului tău. În acest director ar trebui să fie creată mai târziu fișierul.
- Scrie o funcție care acceptă un parametru.
- Aceasta ar trebui să verifice dacă fișierul txt există deja. Dacă nu există, ar trebui creat.
- Conținutul parametrului ar trebui să fie scris în fișier. Amintește-ți să furnizezi acest conținut când apelezi funcția.
- Dacă fișierul există deja, atunci adaugă conținutul parametrului într-o nouă linie în fișierul existent.

- In dieser Übung geht es darum, zu überprüfen, ob eine .txt-Datei bereits existiert. Falls dies nicht der Fall ist, soll sie erstellt werden. Falls sie bereits existiert, soll mithilfe eines Parameters eine neue Zeile in der Datei hinzugefügt werden. Gehe dabei Schritt für Schritt vor:
- Erstelle mithilfe des Node.js Filesystems einen Unterordner innerhalb deines Projektordners. In diesem Ordner soll die Datei später angelegt werden.
- Schreibe eine Funktion, die einen Parameter annimmt.
- Diese soll prüfen, ob die txt-Datei bereits existiert. Wenn dies nicht der Fall ist, soll sie erstellt werden.
- In die Datei soll der Inhalt des Parameters geschrieben werden. Denk daran, diesen auch mitzuliefern, wenn du die Funktion aufrufst.
- Existiert die Datei bereits? Dann füge der bereits bestehenden Datei den Inhalt des Parameters in einer neuen Zeile hinzu.
*/