const mongoose = require("mongoose");

const propSchema = new mongoose.Schema({
  title: String,
  body: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Prop = mongoose.model("Prop", propSchema);

module.exports = Prop;
