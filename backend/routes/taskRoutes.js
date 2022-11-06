const express = require('express');
const router = express.Router();
/* Task controller */
const {createTask, getAllTasks, getTask, deleteTask, updateTask} = require('../controllers/taskController')

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask)

module.exports = router;