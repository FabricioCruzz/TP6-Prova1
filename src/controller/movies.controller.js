const service = require('../service/movies.service')

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}

const getById = (req, res) => {
    res.status(200).send(service.getById(req.params.id))
}

const create = (req, res) => {
    const movie = req.body
    service.create(movie)
    res.status(201).send('Created')

    // if(isValidBody(res, movie)){
    // }
}

const update = (req, res) => {
    const movie = service.getById(req.params.id)
    
    service.update(req.params.id, req.body)
    res.status(204).send('No content')
    // if (movie) {
    //     if (isValidBody(res, movie)) {
    //     }
    // } else {
    //     res.status(404).send('Movie not found')
    // }
}

const remove = (req, res) => {
    service.remove(req.params.id)
    res.send('Movie removed successfully!')
}

const isValidBody = (res, movie) => {
    
    if(!movie.id) {
        res.status(400).send('Invalid data supplied')
        return false
    }
    else if(!movie.title || movie.title.trim() === ''){
        res.status(400).send('Invalid data supplied')
        return false
    }
    else if(!movie.description || movie.description.trim() === ''){
        res.status(400).send('Invalid data supplied')
        return false
    }
    else if(!movie.release_year){
        res.status(400).send('Invalid data supplied')
        return false
    }
    return true
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove   
}