const db = require("../config/connection");
const { User, Pets, Admin } = require("../models");

const UserSeeds = require("./userSeeds.json");
const adminSeeds = require("./adminSeeds.json");
const petSeeds = require("./petSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(UserSeeds);

    await Pets.deleteMany({});
    await Pets.create(petSeeds);

    await Admin.deleteMany({});
    await Admin.create(adminSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
