const  db = require('../../data/dbConfig.js');

const find =  () =>{
    return db('project')
}

const findById = project_id =>{
    return db('project').where('project_id', project_id).first()
}
const add = (project) =>{
    return db('project').insert(project)
    .then(([project_id])=> findById(project_id))
}

module.exports = { find, findById, add,}