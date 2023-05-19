const express = require("express");
const user_route = express();
user_route.use(express.json());
user_route.use(express.urlencoded({ extended: true }));

const userController = require("../controllers/userController");

user_route.get("/", userController.initialize);
user_route.post("/artworks/", userController.uploadArt);
user_route.put("artworks/:id", userController.updateArt);
user_route.post("/artist/", userController.artistSignUp);
user_route.post("/customer/", userController.customerSignUp);

module.exports = user_route;
