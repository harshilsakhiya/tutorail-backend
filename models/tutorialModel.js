const mongoose = require("mongoose");

const tutorialModel = mongoose.Schema({
  title: { type: String },

  description: { type: String, required: true },

  status: { type: String, required: true },
});

const Tutorial = mongoose.model("Tutorial", tutorialModel);

module.exports = Tutorial;
