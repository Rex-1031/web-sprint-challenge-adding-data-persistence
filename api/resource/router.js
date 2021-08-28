const express = require('express');
const Resource = require('./model');



const router = express.Router();

router.get('/', async(req, res, next) =>{
    try{
        const resource = await Resource.find()
        res.json({resource})
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res, next)=>{
    try{
        const newResource = await Resource.add(req.body)
        res.json(newResource)
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