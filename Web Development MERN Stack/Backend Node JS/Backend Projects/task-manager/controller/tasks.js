const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}).lean();
        res.status(200).json({ success: true, data: tasks, count: tasks.length });
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
            return res.status(404).json({ msg: 'Task not found' })
        }

        res.status(200).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
};


const updateTask = async (req, res) => {
    res.send(`Task ${req.params.id} is updated`)
    
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
    deleteTask
}; 