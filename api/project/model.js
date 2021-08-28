const  db = require('../../data/dbConfig.js');

const find =  () =>{
    return db('projects')
}

const findById = id =>{
    return db('projects').where('project_id', id).first()
}
const add = (projects) =>{
    return db('projects').insert(projects)
    .then((id)=> findById(id))
}

module.exports = { find, add,}