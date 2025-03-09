const Task = require("../models/Task");


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}).lean();
        res.status(200).json({ success: true, data: { tasks, totalTasks: tasks.length }, count: tasks.length });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || 'Server error, unable to fetch tasks' });
    }
};



const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ success: true, message: 'Task created', data: task });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message || 'Invalid task data' });
    }
};



const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID }).lean();

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        res.status(200).json({ success: true, message: 'Your task', data: task });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || 'Invalid task id' });
    }
};



const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate(
            { _id: taskID },
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ success: false, message: 'No such task' });
        }

        res.status(200).json({ success: true, message: 'Task updated successfully', data: task });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || 'Something went wrong' });
    }
};



const editTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndReplace(
            { _id: taskID },
            req.body,
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ success: false, message: 'No such task' });
        }

        res.status(200).json({ success: true, message: 'Task updated successfully', data: task });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || 'Something went wrong' });
    }
};



const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });

        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }

        res.status(200).json({ success: true, message: `Task ${taskID} deleted`, data: task });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || 'Server error, unable to delete task' });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
};