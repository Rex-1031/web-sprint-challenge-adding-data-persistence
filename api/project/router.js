const express = require('express');
const Project = require('./model');



const router = express.Router();

router.get('/', async(req, res, next) =>{
    try{
        const project = await Project.getAll()
        res.json(project)
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res, next)=>{
    try{
        const newProject = await Project.create(req.body)
        res.json(newProject)
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