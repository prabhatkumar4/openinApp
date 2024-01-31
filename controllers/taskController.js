const Task = require('../models/task');
const Subtask = require('../models/subtask');
const User = require('../models/user');

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const createSubtask = async (req, res) => {
  try {
    const subtask = await Subtask.create(req.body);
    res.json(subtask);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getAllSubtasks = async (req, res) => {
  try {
    const subtasks = await Subtask.find();
    res.json(subtasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const updateTask =  async (req, res) => {
  const taskId=req.params.taskId;
  try {
    const task = await Task.updateOne({
      "_id":taskId
    },
    req.body
    );
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const updateSubtask = async (req, res) => {
  const subtaskId=req.params.subtaskId;
  try {
    const subtask = await Subtask.updateOne({
      "_id":subtaskId
    },
    req.body
    );
    res.json(subtask);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const deleteTask = async (req, res) => {
  try {

        await Task.deleteOne({"_id":req.params.taskId});
        res.status(200).json({
        message:"deleted the task"
      });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const deleteSubtask = async (req, res) => {
  try {
    await Subtask.deleteOne({"_id":req.params.subtaskId});
    res.status(200).json({
      message:"deleted the subtask"
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createTask,
  createSubtask,
  getAllTasks,
  getAllSubtasks,
  updateTask,
  updateSubtask,
  deleteTask,
  deleteSubtask
  // Other exported functions...
};
