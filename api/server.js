const express = require('express');

const ProjectRouter = require('./project/router.js');
const ResourceRouter = require('./resource/router.js');
const TaskRouter = require('./task/router.js');

const server = express();

server.use(express.json());


server.use('*', (req, res) =>{
    res.json({api: 'Test...'})
})

module.exports = server