const { gql } = require("apollo-server-express");
const { Schema, model } = require("mongoose");

const applicationSchema = new Schema({
  petId: {
    type: String,
    ref: "Pets",
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  stateZip: {
    type: String,
    required: false,
  },
  petExperience: {
    type: String,
    // enum: ['No experience', 'Some experience', 'Experienced', 'Very Experienced'],
    required: false,
  },
  otherPets: {
    type: String,
    required: false,
  },
  residenceType: {
    type: String,
    // enum: ['apartment', 'town home', 'house'],
    required: false,
  },
  yardSize: {
    type: String,
    required: false,
  },
  numChildren: {
    type: Number,
    required: false,
  },
  childrenAges: {
    type: String,
    required: false,
  },
});

const Application = model("Application", applicationSchema);

module.exports = Application;
