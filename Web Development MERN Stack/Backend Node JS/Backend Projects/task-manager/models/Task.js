const mongoose = require('mongoose');;
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    taskName: {
        type: String,
        required: [true, 'Task name is required'],
        trim: true,
        minlength: [3, 'Task name must be at least 3 characters'],
        maxlength: [100, 'Task name cannot exceed 100 characters']
    },
    taskContent: {
        type: String,
        trim: true,
        default: '',
        maxlength: [1000, 'Task content cannot exceed 1000 characters']
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    dueDate: {
        type: Date,
        default: null
    }
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;