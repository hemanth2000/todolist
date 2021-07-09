const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
  },
  tag: {
    type: String,
    enum: ["office", "school", "personal"],
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
