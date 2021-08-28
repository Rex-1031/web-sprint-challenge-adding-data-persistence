const  db = require('../../data/dbConfig.js');

const find =  () =>{
    return db('resources')
}

const findById = resource_id =>{
    return db('resources').where('resource_id', resource_id).first()
}
const add = (resources) =>{
    return db('resources').insert(resources)
    .then((id)=> findById(id))
}

module.exports = { find, findById, add,}