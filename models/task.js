// In backend dev, a model is like a blueprint for the data in your application. It defines the structure of your data and how it interacts with the database

const mongoose = require("mongoose"); //Import Mongoose

const schema = mongoose.Schema; //This is a shortcut to import mongoose schema class.

//We are defining the schema for task based on the UI.
const taskSchema = new schema({
  title: String, //This represents the title of the task
  description: String, //This represents the description of the task
  tag: String, //This is the tag associated with the task "urgent or important"
});

module.exports = mongoose.model("task", taskSchema);
//We are exporting the model to be used for request operation in the controller
