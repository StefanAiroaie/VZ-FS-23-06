let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function () {
        return `<p> Name: ${this.vorname} ${this.nachname}</p> 
        <p>Alter: ${this.alter}</p> 
        <p>Körpergroße: ${this.groesse}</p> 
        <p>Familienstand: ${this.familienstand}</p> `
    }
};
//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
document.getElementById("person").innerHTML = person.profil();