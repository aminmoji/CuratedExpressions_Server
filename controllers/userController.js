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
    res.json(await Artwork.find({ user: userId }));
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err.message);
  }
};

const getArtWork = async (req, res) => {
  try {
    const artWorkId = req.params.id;
    res.json(await Artwork.findById(artWorkId));
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
      images: req.body.images,
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

const deleteArt = async (req, res) => {
  try {
    res.json(await Artwork.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userData = await Users.findOne({ email: email });

    if (!userData) {
      return res.json({ message: "Email or Password are Incorrect!" });
    }

    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (!passwordMatch) {
      return res.json({ message: "Email or Password are Incorrect!" });
    }

    const safeUser = userData.toObject();
    delete safeUser.password;

    const token = jwt.sign(
      {
        user: safeUser,
      },
      process.env.SECRET
    );

    return res.json({ status: "OK", user: token });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json(err.message);
  }
};

const signUp = async (req, res) => {
  try {
    const checkEmail = await Users.findOne({ email: req.body.email });

    if (checkEmail) {
      return res.json({ message: "User Already Exists" });
    }

    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const user = new Users({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      website: req.body.website,
      password: passwordHash,
    });

    await user.save();
    return res.status(201).json({ status: "OK" });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json(err.message);
  }
};

module.exports = {
  getAllArtWork,
  uploadArt,
  updateArt,
  signUp,
  login,
  getUserArtWork,
  getArtWork,
  deleteArt,
};
