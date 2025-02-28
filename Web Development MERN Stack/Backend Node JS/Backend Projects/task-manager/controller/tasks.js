const getAllTasks = (req, res) => {
    res.send('All tasks are listed');
};

const createTask = (req, res) => {
    res.json(req.body);
};

const getTask = (req, res) => {
    res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
    res.json({ id: req.params.id });
};

const deleteTask = (req, res) => {
    res.send('Create Task');
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}; 