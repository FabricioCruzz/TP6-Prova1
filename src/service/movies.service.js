const myDatabase = []

const getAll = () => myDatabase

const getById = movieId => {
    const movieIdx = findElementById(movieId)
    return myDatabase[movieIdx]
}

const create = element => {
    myDatabase.push(element)
}

const update = (elementId, element) => {
    const index = myDatabase.findIndex(e => e.id == elementId)
    myDatabase[index] = element
}

const remove = elementId => {
    const index = myDatabase.findIndex(e => e.id == elementId)
    myDatabase.splice(index, 1)
}

const findElementById = movieId => {
    const movieIdx = myDatabase.findIndex(movie => movie.id == movieId)
    return movieIdx
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    findElementById
}