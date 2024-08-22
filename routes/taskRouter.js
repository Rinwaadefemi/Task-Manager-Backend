const express = require("express"); //Import Express Framework.
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
} = require("../controller/taskController");

const router = express.Router(); //Create a new router instance.

router.get("/", getAllTask); //Router to get all tasks, handled by the getAllTask Function

router.post("/create", createTask); //Route to create a new task, handled by createTask function

router.patch("/:id", editTask); //Route to edit a new task by its ID , handled by the editTask

router.delete("/:id", deleteTask); //Route to delete an existing task by ID, by the delete taskController

router.get("/:id", eachTask); //Routre to get a task handled by the eachTask function

//To export and import into app.js
module.exports = router; //Export router to be used in the main server file (app.js)
