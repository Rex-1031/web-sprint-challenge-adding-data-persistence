const express = require('express');

const projectRouter = require('./project/router.js');
const resourceRouter = require('./resource/router.js');
const taskRouter = require('./task/router.js');

const server = express();




server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use(express.json());

module.exports = server