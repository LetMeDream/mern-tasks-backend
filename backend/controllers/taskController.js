const Task = require('../models/taskModel');

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const getTask = async (req,res) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task){
            return res.status(404).json(`The task with the id ${req.params.id} does not exist`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const deleteTask = async (req,res) => {
    try {  
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).send(`The task does not exist`);
        }
        res.status(200).send(`Task with id:${id} has been deleted`); 
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const updateTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body,
            { 
                new:true,
                runValidators:true
            }
        );
        if(!task){
            return res.status(404).send(`The task does not exist`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const patchTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body,
            { 
                new:true,
                runValidators:true
            }
        );
        if(!task){
            return res.status(404).send(`The task does not exist`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


module.exports = {
    createTask,
    getAllTasks,
    getTask,
    deleteTask,
    updateTask,
    patchTask
}