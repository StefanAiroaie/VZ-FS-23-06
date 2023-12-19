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


//sort
const sortAtoZ = () => {
    let aToZ = languages.sort()
    console.log(aToZ);
}

// reverse
const sortZToA = () => {
    let zToA = languages.reverse()
    console.log(zToA);
}

sortAtoZ()
sortZToA()