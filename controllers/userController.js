const Artists = require("../models/artistModel");
const Artwork = require("../models/artworkModel");
const Customers = require("../models/customerModel");

const initialize = async (req, res) => {
  try {
    res.json(await Artwork.find({}));
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const uploadArt = async (req, res) => {
  try {
    res.json(await Artwork.create(req.body));
  } catch (err) {
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

const artistSignUp = async (req, res) => {
  try {
    res.json(await Artists.create(req.body));
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const customerSignUp = async (req, res) => {
  try {
    res.json(await Customers.create(req.body));
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = {
  initialize,
  uploadArt,
  updateArt,
  artistSignUp,
  customerSignUp,
};
