const dotenv = require("dotenv").config();
const express = require("express");
const { Logger } = require("mongodb");
const connectDB = require("./config/connectDB");
const bookRoutes = require("./routes/bookRoute");

const app = express();
const cors = require('cors');

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.use(cors({
  origin: [
  "http://localhost:3000", 
  "https://mern-task-app-2ql0.onrender.com" 
]
}));

app.use("/api/books", bookRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

const startServer = async (arg) => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    return server; 
  } catch (error) {
    console.log(error);
  }
};

module.exports = startServer();;

