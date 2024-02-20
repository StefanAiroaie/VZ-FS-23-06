export const filterData = (array) => {
    return array.filter((city) => city.population > 100000)
}

export const filterData2 = (array) => {
    return array.filter((city) => city.population < 100000)
}



