

console.log("works?");

// const header = document.getElementById("bucketHeader")
// console.log(header);
// header.classList.add("css1")
const headline = document.querySelector("#bucketHeader")

function hStylen() {
    headline.classList.toggle("css1")
    console.log(headline);
}

function hStylenAdd() {
    headline.classList.add("css1")
    console.log(headline);
}

function hStylenRemove() {
    headline.classList.remove("css1")
    console.log(headline);
}