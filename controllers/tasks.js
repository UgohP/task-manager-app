const Task = require('../models/tasks');

const getAllTasks = (req, res) => {
    res.send('All Tasks')
}

const getTask = (req, res) => {
    res.send('A Task')
}

const createTask = (req, res) => {
    res.send('Create Task')
}

const updateTask = (req, res) => {
    res.send('Update Task')
}

const deleteTask = (req, res) => {
    res.send('Delete Task')
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}