const  db = require('../../data/dbConfig.js');

const find =  () =>{
    return db('resource')
}

const findById = resource_id =>{
    return db('resource').where('resource_id', resource_id).first()
}
const add = (resource) =>{
    return db('resource').insert(resource)
    .then(([resource_id])=> findById(resource_id))
}

module.exports = { find, findById, add,}