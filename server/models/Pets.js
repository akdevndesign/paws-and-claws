const { Schema, model } = require("mongoose");

const petsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  age: {
    type: Number,
    trim: true,
  },
  image_url: {
    type: String,
    allowNull: false,
  },
  bio: {
    type: String,
    required: true,
    allowNull: false,
  },
  activity_level: {
    type: Number,
    required: true,
    allowNull: false,
  },
  cuddliness_level: {
    type: Number,
    required: true,
    allowNull: false,
  },
  friendliness_level: {
    type: Number,
    required: true,
    allowNull: false,
  },
  health_history: {
    type: String,
    required: true,
    allowNull: false,
  },
});

const Pets = model("Pets", petsSchema);

module.exports = Pets;
