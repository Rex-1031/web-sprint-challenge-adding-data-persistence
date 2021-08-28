const  db = require('../../data/dbConfig.js');

const find =  () =>{
    return db('task')
}

const findById = task_id =>{
    return db('task').where('task_id', task_id).first()
}
const add = (task) =>{
    return db('task').insert(task)
    .then(([task_id])=> findById(task_id))
}

module.exports = { find, findById, add,}