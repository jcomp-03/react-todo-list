const { Schema, model } = require("mongoose");

// The schema maps to a MongoDB collection and defines 
// the shape of the documents within that collection
const taskSchema = new Schema(
  {
    taskTitle: {
      type: String,
      required: "Mongoose: Task description is required."
    },
    taskDescription: {
      type: String,
      required: "Mongoose: Task description is required."
    },
    taskId: {
      type: String,
      required: "Mongoose: Task id is required."
    },
    taskTags: [String],
    taskDate: {
        type: String,
        required: "Mongoose: Task date is required."
    }
  }
);

// compile the taskSchema into a model, which is a class that
// allows us to construct documents
const Task = model("Task", taskSchema);

module.exports = Task;
