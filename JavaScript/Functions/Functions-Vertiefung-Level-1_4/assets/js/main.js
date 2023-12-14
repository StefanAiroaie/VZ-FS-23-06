/*
Deklariere die Funktion hero() mit drei Parametern heroName, heroPower und heroEnemy. Im Funktionskörper {} sollst du dann Folgendes machen
Deklariere drei Variablen name, power und enemy.
Weise den Variablen dann diese Werte zu
a. Mein:e Lieblingsheld:in ist: xyz
b. Er/sie hat die Fähigkeit: xyz
Sein/ihr größte/r Gegner:in ist: xyz.
Füge die passenden Parameter in die Variablen ein.
Gib name + power + enemy in der Konsole aus.
Ruf deine Funktion auf.
Übergib Argumente für deine:n Lieblingsheld:in und gib diese in der Konsole aus. */


hero = (heroName, heroPower, heroEnemy) => {
    let name = `Mein:e Lieblingsheld:in ist: ${heroName}`
    let power = `Er/sie hat die Fähigkeit: ${heroPower}`
    let enemy = `"ein/ihr größte/r Gegner:in ist: ${heroEnemy}`
    console.log(name, power, enemy)
}


hero("Emilina", "Alles zu essen", "Hunger :)")
