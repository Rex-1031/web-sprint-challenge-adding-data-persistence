const express = require('express');
const Project = require('./model');



const router = express.Router();

router.get('/', async(req, res, next) =>{
    try{
        const projects = await Project.find()
        res.json(
            projects.map((project)=>{
                return{...project, project_completed: Boolean(project.project_completed)}
            }))
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res, next)=>{
    try{
        const newProject = await Project.add(req.body)
        res.status(201).json({
            ...newProject,
            project_completed: newProject.project_completed !==0
        })
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