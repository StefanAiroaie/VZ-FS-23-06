let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];


myMusic.forEach((infos) => {
    const createDiv = document.createElement("div")

    const rYear = infos.release_year
    if (rYear > 1975) {
        const title = document.createElement("p")
        title.innerHTML = infos.title
        createDiv.appendChild(title)
        const artist = document.createElement("p")
        artist.textContent = infos.artist
        createDiv.appendChild(artist)
        const medium = document.createElement("p")
        medium.textContent = infos.medium
        createDiv.appendChild(medium)
        document.body.appendChild(createDiv)
    }

    //adds div

})

