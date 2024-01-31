const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/create', taskController.createTask);
router.post('/create-subtask', taskController.createSubtask);
router.get('/get-all', taskController.getAllTasks);
router.get('/get-all-subtasks', taskController.getAllSubtasks);
router.put('/update/:taskId', taskController.updateTask);
router.put('/update-subtask/:subtaskId', taskController.updateSubtask);
router.delete('/delete/:taskId', taskController.deleteTask);
router.delete('/delete-subtask/:subtaskId', taskController.deleteSubtask);

module.exports = router;
