// const express = require("express");
// const art_route = express();
// art_route.use(express.json());
// art_route.use(express.urlencoded({ extended: true }));
// const Artworks = require("./models/artworkModel");

// art_route.get("/", async (req, res) => {
//   try {
//     res.json(await Artworks.find({}));
//   } catch (err) {
//     res.status(400).json(err.message);
//   }
// });

// art_route.post("/artworks/", async (req, res) => {
//   try {
//     res.json(await Artworks.create(req.body));
//   } catch (err) {
//     res.status(400).json(err.message);
//   }
// });

// art_route.delete("/artworks/:id", async (req, res) => {
//   try {
//     res.json(await Artworks.findByIdAndRemove(req.params.id));
//   } catch (err) {
//     res.status(400).json(err.message);
//   }
// });

// art_route.put("/artworks/:id", async (req, res) => {
//   try {
//     res.json(await Artworks.findByIdAndUpdate);
//   } catch (err) {
//     res.status(400).json(err.message);
//   }
// });

// module.exports = art_route;
