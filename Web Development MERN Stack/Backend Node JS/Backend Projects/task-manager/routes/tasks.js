const express = require('express');
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controller/tasks');

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).post(updateTask).delete(deleteTask)


module.exports = router;
