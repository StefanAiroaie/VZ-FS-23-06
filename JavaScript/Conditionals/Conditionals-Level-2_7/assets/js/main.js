

/*
Lernziel: Anwendung von Switch/Case.
Schreibe eine Function, um die Daten der Selectbox zu erhalten.
HTML und CSS ist vorgegeben (siehe Code-Snippet).
switch
case
default (extragroße Größe)
Definiere die Function showtxt();
*/

function showtxt() {
    let outputMasse = document.querySelector("#masse")
    let productName = document.querySelector("td:first-child")
    let select = document.querySelector("#mylist").value
    console.log(select);
    switch (select) {
        case "0":
            productName.innerHTML = "<b>Brief und Postkarte</b> <br>"
            outputMasse.innerHTML = "L: 10 - 23,5 cm  B: 7 - 12,5 cm  H: bis 1 cm"
            break
        case "1":
            productName.innerHTML = "<b>DHL Paket 2 kg</b> <br>"
            outputMasse.innerHTML = "bis 60 x 30 x 15 cm"
            break
        case "2":
            productName.innerHTML = "<b>DHL Paket 5 kg</b> <br>"
            outputMasse.innerHTML = "bis 120 x 60 x 60 cm"
            break
        case "3":
            productName.innerHTML = "<b>DHL Paket 10 kg</b> <br>"
            outputMasse.innerHTML = "bis 120 x 60 x 60 cm"
            break
        default:
            productName.innerHTML = "<b>Extra große Größe</b>"
            break
    }

}
/*
   <option value="0">Briefe</option>
        <option value="0">Postkarte</option>
        <option value="1">Bücher bis 500g</option>
        <option value="1">Bücher bis 1000g</option>
        <option value="1">MacBook Air</option>
        <option value="2">Drucker</option>
        <option value="2">Mikrowelle</option>
        <option value="3">Kleinmöbel</option>
        <option value="3">kleine Kühlschränke</option>
*/


/*

JS Assets:

<b>Brief und Postkarte</b> <br>
        L: 10 - 23,5 cm
        B: 7 - 12,5 cm
        H: bis 1 cm

<b>DHL Paket 2 kg</b> <br>
bis 60 x 30 x 15 cm

<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm

<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm

"<b>Extra große Größe</b>

*/