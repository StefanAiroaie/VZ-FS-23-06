
// sort function
const sortFunc = (array) => {
    return array.sort((a, b) => {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        }
        return 0
    })
}


const firstEllement = (array) => {
    return array[0]
}

const allMinusLast = (array) => {
    return array.slice(0, (array.length - 1))
}

const onlyLast = (array) => {
    return array.slice((array.length - 1))
}


const allMinusFirst = (array) => {
    return array.slice(1)
}


const sumFunc = (array) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        result += array[i]
    }
    return result

}


const FirstLetterToUppercase = (string) => {
    return chartAt[0].toUpperCase()


}

const stringToUppercase = (array) => {
    return array.map(el => el.toUpperCase())
}


export default { sortFunc, firstEllement, allMinusLast, allMinusFirst, onlyLast, sumFunc, stringToUppercase }