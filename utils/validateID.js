//What is Utils?

//Utils is a short name for UTILITIES which refers to a collection of helper functions or modules designed to perform common tasks on multiple functions.

//These tasks often includes thingslike data validation, formating other repetitive operations that are used across different parts of the applications

const mongoose = require("mongoose"); //Import mongoose

//This is a utility function to validate mongodb objectids
const validateID = (id) => {
  //Check if the ID is a valid MongoDB objectid
  const isValid = mongoose.Types.ObjectId.isValid(id);

  return isValid; //This is to return the validation result
};

module.exports = validateID; //This exports the function to be use in the controller
