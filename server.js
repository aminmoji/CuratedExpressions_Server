// Dependencies and Middlewares
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { PORT, URL } = process.env;

// Importing Models
const Artworks = require("./models/artworkModel");
const Users = require("./models/userModel");

//Mongo Database Connection
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((error) => {
    console.error("Connection Error", error.message);
    process.exit();
  });

//Importing Routes
const userRoute = require("./routes/userRoutes");
app.use("/", userRoute);

// PORT Listening
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
