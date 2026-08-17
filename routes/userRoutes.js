const express = require("express");
const user_route = express();

user_route.use(express.json());
user_route.use(express.urlencoded({ extended: true }));

const userController = require("../controllers/userController");

user_route.get("/", userController.getAllArtWork);
user_route.get("/user/:id", userController.getUserArtWork);
user_route.get("/artwork/:id", userController.getArtWork);
user_route.post("/artwork/", userController.uploadArt);
user_route.put("/artwork/:id", userController.updateArt);
user_route.delete("/artwork/:id", userController.deleteArt);
user_route.post("/signup/", userController.signUp);
user_route.post("/login/", userController.login);

module.exports = user_route;
