
// sort function
const sortFunc = (array) => {
    return array.sort()
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


export default { sortFunc, firstEllement, allMinusLast, allMinusFirst, onlyLast }