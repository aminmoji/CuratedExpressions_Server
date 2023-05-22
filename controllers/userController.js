const Users = require("../models/userModel");
const Artwork = require("../models/artworkModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getAllArtWork = async (req, res) => {
  try {
    res.json(await Artwork.find({}));
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getUserArtWork = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    res.json(await Artwork.find({ user: userId }));
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err.message);
  }
};

const uploadArt = async (req, res) => {
  try {
    const artwork = new Artwork({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      medium: req.body.medium,
      user: req.body.user,
      qty: req.body.qty,
      image: req.body.image,
      tags: req.body.tags,
    });
    await artwork.save();
    res.json({ status: "OK" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err.message);
  }
};

const updateArt = async (req, res) => {
  try {
    res.json(
      await Artwork.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userData = await Users.findOne({ email: email });
    if (userData) {
      const passwordMatch = await bcrypt.compare(password, userData.password);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            user: userData,
          },
          process.env.SECRET
        );
        return res.json({ status: "OK", user: token });
      } else {
        res.json({ message: "Email or Password are Incorrect!" });
      }
    } else {
      res.json({ message: "Email or Password are Incorrect!" });
    }
  } catch (err) {
    res.status(400).josn(err.message);
    console.log(err.message);
  }
};

const signUp = async (req, res) => {
  try {
    const checkEmail = await Users.findOne({ email: req.body.email });
    if (checkEmail) {
      res.json({ message: "User Already Exists" });
    } else {
      passwordHash = await bcrypt.hash(req.body.password, 10);
      const user = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        password: passwordHash,
      });

      await user.save();
    }
  } catch (err) {
    console.log(error.message);
  }
};

module.exports = {
  getAllArtWork,
  uploadArt,
  updateArt,
  signUp,
  login,
  getUserArtWork,
};
