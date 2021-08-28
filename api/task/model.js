const  db = require('../../data/dbConfig.js');

const find =  () =>{
    return db('tasks').leftJoin('projects', 'tasks.project_id', 'projects.project_id')
}

const findById = id =>{
    return db('tasks').where({'task_id': id})
}
const add = (task) =>{
    return db('tasks').insert(task)
    .then((id)=> findById(id).first())
}

module.exports = { find, add}