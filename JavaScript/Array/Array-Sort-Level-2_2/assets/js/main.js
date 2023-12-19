let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];


const sort = () => {
    numArray2.sort(function (a, b, c) {
        return a - b
    })
    console.log(numArray2);
}


sort()