function fahrrad() {
    console.log(this.name);
}

function fahrrad2() {
    console.log(this.fahrrad);
}


let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

this.fahrrad() //empty
obj1.fahrrad() // merinda
obj2.fahrrad() //scot

