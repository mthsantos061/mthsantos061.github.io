const express = require('express');
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware'); // Middleware to protect routes
const router = express.Router();

// Apply protect middleware to all task routes
router.use(protect);

router.route('/')
    .get(getAllTasks)
    .post(createTask);

router.route('/:id')
    // .get(getTaskById) // You don't seem to need a dedicated "get by ID" if editing uses data from getAllTasks
    .put(updateTask)
    .delete(deleteTask);

module.exports = router;