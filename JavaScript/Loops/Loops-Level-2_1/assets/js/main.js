
function imageArray() {
    let returnArray = []
    for (i = 1; i <= 100; i++)
        if (i <= 9) {
            returnArray.push("image_00" + i + ".jpg")

        }
        else if (i <= 99) {
            returnArray.push("image_0" + i + ".jpg")
        }
        else {
            returnArray.push("image_" + i + ".jpg")
        }
    console.log(returnArray);
}

imageArray()