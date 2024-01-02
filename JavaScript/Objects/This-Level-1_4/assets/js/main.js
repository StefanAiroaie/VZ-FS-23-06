function fahrrad() {
    console.log(this.name);
}

function fahrrad2() {
    console.log(this.fahrrad);
}


let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

fahrrad(obj1.fahrrad())
fahrrad(obj2.fahrrad())
fahrrad2(obj1.fahrrad())
fahrrad2(obj2.fahrrad())