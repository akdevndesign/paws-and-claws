const { Schema, model } = require("mongoose");

const petsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  animal_type: {
    type: String,
    required: true,
    unique: false,
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
  applicantions: {
    typpe: Array,
    required: false,
    allowNull: true,
  }
});

const Pets = model("Pets", petsSchema);

module.exports = Pets;
