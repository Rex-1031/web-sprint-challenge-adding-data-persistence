const  db = require('../../data/dbConfig.js');

const find =  () =>{
    return db('resources')
}

const findById = id =>{
    return db('resources').where({'resource_id': id})
}
const add = (resource) =>{
    return db('resources').insert(resource)
    .then((id)=> findById(id).first())
}

module.exports = { find, add,}