const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String },
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
