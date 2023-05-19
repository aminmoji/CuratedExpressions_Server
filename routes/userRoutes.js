const express = require("express");
const user_route = express();
user_route.use(express.json());
user_route.use(express.urlencoded({ extended: true }));
const Artists = require("./models/artistModel");

user_route.get("/artists/:id", async (req, res) => {
  try {
    res.json(await Artists.findById(req.params.id));
  } catch (err) {
    res.status(400).json(err.message);
  }
});
