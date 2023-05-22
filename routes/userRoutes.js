const express = require("express");
const user_route = express();
// const session = require("express-session");
// user_route.use(session({ secret: process.env.SESSION_SECRET }));
user_route.use(express.json());
user_route.use(express.urlencoded({ extended: true }));

const userController = require("../controllers/userController");

user_route.get("/", userController.getAllArtWork);
user_route.get("/user/:id", userController.getUserArtWork);
user_route.post("/artworks/", userController.uploadArt);
user_route.put("/artworks/:id", userController.updateArt);
user_route.post("/signup/", userController.signUp);
user_route.post("/login/", userController.login);

module.exports = user_route;
