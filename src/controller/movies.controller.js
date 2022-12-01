const service = require('../service/movies.service')

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}

const getMovieById = (req, res) => {
    const movie = service.getMovieById(req.params.id)
    if(movie){
        res.status(200).send(movie)
    }
    else {
        res.status(204).send('Movie not found')
    }
}

const create = (req, res) => {
    const movie = req.body

    if(isValidBody(res,movie)){
        service.create(movie)
        res.status(201).send('Movie created')
    }
}

const update = (req, res) => {
    const movieId = req.params.id
    const movie = service.getMovieById(movieId)
    
    service.update(req.params.id, req.body)
    res.status(204).send('No content')
    if (movie) {
        if (isValidBody(res, req.body)) {
            service.update(movieId, req.body)
        }
    } else {
        res.status(404).send('Movie not found')
    }
}

const remove = (req, res) => {
    const movieId = req.params.id
    const movie = service.getMovieById(movieId)
    if(movie){
        service.remove(movieId)
        res.status(204).send('updated')
    }
    else{
        res.status(404).send('Movie not found')
    }
}

const isValidBody = (res, movie) => {
    
    if(!movie.release_year || !movie.description || !movie.title || !movie.id){
        res.status(400).send('Invalid data suplied')
        return false
    }
    return true
}

module.exports = {
    getAll,
    getMovieById,
    create,
    update,
    remove   
}