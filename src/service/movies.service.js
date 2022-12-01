const myDatabase = []

const getAll = () => myDatabase

const getMovieById = movieId => {
    const movieIdx = findElementById(movieId)
    return myDatabase[movieIdx]
}

const create = movie => {
    myDatabase.push(movie)
}

const update = (movieId, movie) => {
    const index = myDatabase.findIndex(mov => mov.id == movieId)
    myDatabase[index] = movie
}

const remove = movieId => {
    const index = myDatabase.findIndex(mov => mov.id == movieId)
    myDatabase.splice(index, 1)
}

const findMovieById = movieId => {
    const movieIdx = myDatabase.findIndex(movie => movie.id == movieId)
    return movieIdx
}

module.exports = {
    getAll,
    getMovieById,
    create,
    update,
    remove,
    findMovieById
}