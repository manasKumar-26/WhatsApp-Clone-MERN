const mongoose = require("mongoose");
const whatsappSchema = new mongoose.Schema(
  {
    message: String,
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);
const messagecontents = mongoose.model("messagecontents", whatsappSchema);
module.exports = messagecontents;
