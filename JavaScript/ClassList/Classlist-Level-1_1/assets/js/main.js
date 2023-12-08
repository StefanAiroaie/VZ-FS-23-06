/*
Erstelle eine HTML-Datei mit der Headline “Meine Bucket-List” und einer Liste mit Dingen, die du gerne machen oder erleben möchtest.
Gib der Headline und der Liste jeweils eine eindeutige ID.
Erstelle im CSS zwei neue Klassen und vergebe dort eine font-family, sowie Textfarbe und Schriftgröße deiner Wahl. Natürlich darfst du auch gerne mehr Stylings verwenden.
Du wirst eine Klasse für die Headline und eine Klasse für die Liste nutzen. Überleg dir also passende Namen und Stylings für die Klassen. Weise nun mit JavaScript der Headline und der Liste die jeweiligen Klassen zu.*/



console.log("works?");

const header = document.getElementById("bucketHeader")
console.log(header);
header.classList.add("css1")
const list = document.getElementById("bucketList")
console.log(list);
list.classList.add("css2")