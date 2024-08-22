// A CONTROLLER IN BACKEND IS like a manager that handles the logic for specific paths of your application. It decides what should happen when a request comes in and coordinates between the requests, your data and response ==> This dictates what happens when a request has been made

const Task = require("../models/task");
const validateID = require("../utils/validateID");

// ====FUNCTION TO GET ALL THE TASKS====
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); //Retrieve all tasks from the database
  res.status(200).json({ tasks }); //send the retrieved tasks in a JSON response
};

// ====FUNCTION FOR CREATING A NEW TASK====
const createTask = async (req, res) => {
  const { title, description, tag } = req.body; //DESTRUCTING THE REQUIRED FIELDS ( title, description, tag FIELDS) FROM THE require.body

  //ERROR HANDLING
  if (!title) {
    return res.status(400).json({ message: "Please provide a Title" });
  }
  if (!description) {
    return res.status(400).json({ message: "Please provide a Description" });
  }
  if (!tag) {
    return res.status(400).json({ message: "Please choose a Tag" });
  }

  const task = await Task.create(req.body); //CREATING A NEW TASK WITH THE REQUEST DATA
  res.status(201).json({ message: "Task Created Successfully", task }); //SEND A STATUS CODE WITH A MESSAGE OF SUCCESS. "Task Created Successfully" WILL UPDATE OM POSTMAN
};

// =================== FUNCTION TO EDIT AN EXISTING TASK ==================
const editTask = async (req, res) => {
  const { id } = req.params; //Get the task id from the mongo db

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID:${id} is not Valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); //this updates the task with the provided data. looks for the id, spreads it and updates it one by one. findOneAndUpdate - this enables the editing
  res.status(200).json({ message: "Task Updated Successfully" }); //Sends the success message if updated successfully
};

// ================== FUNCTION TO DELETE AN EXISTING TASK =============
const deleteTask = async (req, res) => {
  const { id } = req.params; //Get the task id from the request paramenter (mongodb or postman)

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID:${id} is not Valid` });
  }

  const task = await Task.findOneAndDelete({ _id: id }); //Delete the task with  the special id
  res.status(200).json({ message: "Task Successfully Deleted" }); //Sends the success message if deletion is successfully
};

//================== FUNCTION TO GET EACH TASK ============
const eachTask = async (req, res) => {
  const { id } = req.params; //Get the task id from the request paramater (mongo db)

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID:${id} is not Valid` });
  }

  const task = await Task.findOne({ _id: id }); //Find the task with the specified ID
  res.status(200).json({ task }); //Send the found task in JSON response
};

// ==========HOW TO EXPORT THE FUNCTIONS ABOVE========
module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask }; // To take the two functions above to the routes. BASICALLY EXPORTING THE CONTROLLER FUNCTIONS (getAllTask, createTask) TO BE USED IN THE ROUTER
