
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


const firstLetterToUppercase = (array) => {
    return array.map(word => (word.charAt(0).toLowerCase() + word.slice(1)))


}

const stringToUppercase = (array) => {
    return array.map(el => el.toUpperCase())
}


const removeDuplicate = (array) => {
    return [...new Set(array)]
}



const removeWord = (array, string) => {
    return array.filter((element) => element !== string)
}


const randomNumberbetween = (n1, n2) => {
    return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
};


const lastLetterEgalFirstLetter = (word, letter) => {
    return word[word.length - 1] === letter;
};

export default { sortFunc, firstEllement, allMinusLast, allMinusFirst, onlyLast, sumFunc, stringToUppercase, firstLetterToUppercase, removeDuplicate, removeWord, lastLetterEgalFirstLetter, randomNumberbetween }
