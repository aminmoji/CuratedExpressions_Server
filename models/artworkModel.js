const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  medium: { type: String, required: true },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "artist",
    required: true,
  },
  image: { type: String, required: true },
});

const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;
