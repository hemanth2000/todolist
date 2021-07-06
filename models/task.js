const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  filters: {
    type: Array,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
