/*


Schreibe eine Funktion, die dich vorstellt und einen Text über dich ausgibt
mit den Parametern
vorname
nachname
geburtsort
alter
wohnort
und der Funktionskörper soll in der Konsole Folgendes ausgeben (nutze String Concatenation): "string text " + Parameter + " string text"
Mein Name ist Aurora Stardust
Ich bin auf Stellarion geboren
Ich bewache die Welt vor finsteren Mächten
Ich bin 20 Jahre alt
Ich wohne in Celestia
Vergiss nicht, die Funktion mit deinen Daten/Argumenten aufzurufen

*/
const vorstellen = (vorname, nachname, geburtsort, alter, wohnort) => {
    console.log(`Mein Name ist ${vorname.concat(" " + nachname)}. \n Ich bin auf ${geburtsort} geboren. \n Ich bewache die Welt vor finsteren Mächten. \n Ich bin ${alter} Jahre alt. \n Ich wohne in ${wohnort}`);
}
vorstellen("Stefan", "Airoaie", "Suceava", "37", "Hilden")

