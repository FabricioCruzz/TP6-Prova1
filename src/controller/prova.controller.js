const service = require('../service/prova.service')

const getAll = (req, res) => {
    res.send(service.getAll())
}

const create = (req, res) => {
    service.create(req.body)
    res.send('Objeto criado com sucesso!')
}

const update = (req, res) => {
    service.update(req.params.id, req.body)
    res.send('Objeto atualizado com sucesso!')
}

const remove = (req, res) => {
    service.remove(req.params.id)
    res.send('Objeto removido com sucesso!')
}

module.exports = {
    getAll,
    create,
    update,
    remove   
}