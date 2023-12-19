let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

let albumText = album.map((value) => {
    if (value.includes("."))
        return value.split(".")[0].toLowerCase()
    else
        return "invalid"
})


console.log(albumText);