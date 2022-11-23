const router = require('express').Router();

const {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require('../../controllers/task-controller');

// /api/tasks
router
  .route('/')
  .get(getAllTask)
  .post(createTask);

// /api/tasks/:id
router
  .route('/:id')
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;
