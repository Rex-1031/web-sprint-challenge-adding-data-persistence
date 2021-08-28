const express = require('express');
const Task = require('./model');



const router = express.Router();

router.get('/', async(req, res, next) =>{
    try{
        const task = await Task.getAll()
        res.json(task)
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res, next)=>{
    try{
        const newtask = await Task.create(req.body)
        res.json(newtask)
    }catch(err){
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})



module.exports = router