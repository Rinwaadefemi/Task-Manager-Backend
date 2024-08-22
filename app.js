require("dotenv").config(); //ENV means ENVIRONMENT VARIABLES. Load environment variables from a .env file into process.env. EVN is for security so hackers don’t get a hold of server. Always make sure backend is secure because of sensitive information

const express = require("express"); //Import Express Framework

const mongoose = require("mongoose"); //Import mongoose for MongoDB interactions

const cors = require("cors");

const app = express(); //Spinning up the express framework server

const port = 3000; //Define the port number for the server. Start the server on a specified port -The Port is 3000

// =============LINK BACKEND TO FRONTEND=======================

// HOW TO CONNECT BACKEND TO FRONTEND
//CORS - means ("Cross Origin Resource Sharing"). This is used when the front-end and backend are from different origins like (different domains, ports, protocols) and the backend hasnt been configured to accept request from the frontend origin

//Using it as a middleware
app.use(cors());

// ========================================

//How to import in backend
const taskRouter = require("./routes/taskRouter"); //Import the taskRouter for task related routes
const notFound = require("./middlewares/notFound");

app.use(express.json()); //This is a middleware to parse incoming JSON requests from postman alllowing access to the req.body

app.use("/api/task", taskRouter); //Mount the taskRouter at/api/task, all task related routes starts with "/api/task"

app.use(notFound); //use the custom 404middleware for handling unmatched routes

// ========================================

const start = async () => {
  try {
    //Attempt to connect to mong db using MONGOOSE.
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected");

    //Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running on Port ${port}`);
    });
  } catch (error) {
    //Log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

//Mongoose DB is an ODM (Object Data Modelling) library for mongo db and node js. They work well together.

//MongoDB is a NoSQL database that stores data in a flexible, JSON like format

// ======================MONGO DB DEETSSS=======================
//USERNAME - bolarinwaadefemi51
//PASSWORD - iZlYLudvT005g1TI
//mongodb+srv://bolarinwaadefemi51:iZlYLudvT005g1TI@cluster0.uy6b9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
