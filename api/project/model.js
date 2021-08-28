const  db = require('../../data/dbConfig.js');

const find =  () =>{
    return db('projects')
}

const findById = id =>{
    return db('projects').where({'project_id': id})
}
const add = (project) =>{
    return db('projects').insert(project)
    .then((id)=> findById(id).first())
}

module.exports = { find, add,}