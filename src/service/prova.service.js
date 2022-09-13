const myDatabase = []

const getAll = () => myDatabase

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

module.exports = {
    getAll,
    create,
    update,
    remove
}