const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    website: { type: String },
    password: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

// 646ad22a108f6acc5ddf8cac
// 646ad22a108f6acc5ddf8cac