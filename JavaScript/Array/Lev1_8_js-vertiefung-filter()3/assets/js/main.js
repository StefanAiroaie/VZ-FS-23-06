const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];


function myHeros() {
    let hero = heroArr.filter(words => words !== undefined && words !== null)
    return hero
}

let newHeroArr = myHeros(heroArr)
console.log(newHeroArr);



