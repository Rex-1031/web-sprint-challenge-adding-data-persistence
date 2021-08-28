const  db = require('../../data/dbConfig.js');

const find =  () =>{
    return db('tasks')
}

const findById = task_id =>{
    return db('tasks').where('task_id', task_id).first()
}
const add = (task) =>{
    return db('tasks').insert(tasks)
    .then((id)=> findById(id))
}

module.exports = { find, findById, add,}