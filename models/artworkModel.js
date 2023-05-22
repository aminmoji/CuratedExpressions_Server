const mongoose = require("mongoose");
const User = require("../models/userModel");

const artworkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    medium: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    qty: { type: Number, required: true },
    image: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;
