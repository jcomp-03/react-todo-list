const { Task } = require('../models');

const taskController = {
  // get all tasks
  getAllTask(req, res) {
    console.log('----- running getAllTask -----');
    Task.find({})
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbTaskData => res.json(dbTaskData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one task by id
  getTaskById({ params }, res) {
    console.log('----- running getTaskById -----');
    Task.findOne({ _id: params.id })
      .select('-__v')
      .then(dbTaskData => res.json(dbTaskData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createTask
  createTask({ body }, res) {
    console.log('----- running CreateTask -----');
    Task.create(body)
      .then(dbTaskData => res.status(200).json(dbTaskData))
      .catch(err => res.json(err));
  },

  // update task by id
  updateTask({ params, body }, res) {
    console.log('----- running updateTask -----');
    Task.findOneAndUpdate({ taskId: params.id }, body, { new: true, runValidators: true })
      .then(dbTaskData => {
        if (!dbTaskData) {
          res.status(404).json({ message: 'No task found with this id!' });
          return;
        }
        res.json(dbTaskData);
      })
      .catch(err => res.json(err));
  },

  // delete task
  deleteTask({ params }, res) {
    console.log('----- running deleteTask -----');
    Task.findOneAndDelete({ taskId: params.id })
      .then(dbTaskData => res.json(dbTaskData))
      .catch(err => res.json(err));
  }
};

module.exports = taskController;
