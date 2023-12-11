
/*

John und Meike spielen ein Spiel, bei dem sie Punkte für Größe und Alter erhalten.
Wer bekommt mehr Punkte? John ist 170 cm groß und 22 Jahre alt, Meike ist 168 cm groß und 34 Jahre alt.
Multipliziere das Alter mit 5 und addiere die Größe.
Vergleiche die Spieler:innenwerte mit if, else if Statements. Wer die meisten Punkte bekommt, gewinnt.
Gib die Punkte und den/die Gewinner:in in deiner Konsole aus.
Vergiss nicht Unentschieden (draw) zu behandeln.

*/


let John = (22 * 5 + 170)
let Meike = (34 * 5 + 168)

function score() {
    console.log(`John Score: ${John}`);
    console.log(`John Score: ${Meike}`);
    if (John > Meike) {
        console.log(`John gewint mit ${John} Punkten!`);
    }
    else {
        console.log(`Meike gewint mit ${Meike} Punkten!`);
    }

}
score()
