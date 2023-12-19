let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

console.log("test");

// mit function
function sort() {
    let sortierung = languages.sort()
    console.log(sortierung);
}

// mit arrow
const sortArrow = () => {
    let sort = languages.sort()
    console.log(sort);
}


sort()
sortArrow()
