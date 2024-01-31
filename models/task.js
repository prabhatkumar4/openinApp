const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    due_date: Date,
    priority: Number,
    status: String,
    deleted_at: Date,
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
