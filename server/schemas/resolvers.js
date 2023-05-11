const bcrypt = require("bcrypt");
const { isAdmin, isAuthenticated } = require("../middleware");
const User = require("../models/User");
const Pets = require("../models/Pets");
const Admin = require("../models/Admin");

const resolvers = {
  Query: {
    getPets: async () => {
      const pets = await Pets.find({});
      return pets;
    },
    getPetById: async (_, { id }) => {
      const pet = await Pets.findById(id);
      return pet;
    },
    getUsers: async () => {
      const users = await User.find({});
      return users;
    },
    getUserById: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    },
  },
  Mutation: {
    // User Registration
    createUser: async (_, { userInput: { name, email, password, phone_number, home_type, pet_experience, other_pets, other_pet_types } }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        password: hashedPassword,
        phone_number,
        home_type,
        pet_experience,
        other_pets,
        other_pet_types,
      });
      const token = signToken(user);

      await user.save();
      return {
        userId: user.id,};
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByIdAndDelete(id);
      return user;
    },
    createPet: async (_, { petInput: { name, animal_type, age, image_url, bio, activity_level, cuddliness_level, friendliness_level, health_history } }) => {
      const pet = new Pets({
        name,
        animal_type,
        age,
        image_url,
        bio,
        activity_level,
        cuddliness_level,
        friendliness_level,
        health_history,
      });
      await pet.save();
      return pet;
    },
    deletePet: async (_, { petId }) => {
      const pet = await Pets.findByIdAndDelete(petId);
      return pet;
    },
    updatePet: async (_, { petId, petInput }) => {
      const pet = await Pets.findByIdAndUpdate(petId, petInput, { new: true });
      return pet;
    },
    applicationSubmit: async (_, { petId, petInput }) => {
      const pet = await Pets.findByIdAndUpdate(petId, petInput, { new: true });
    },
    
    createAdmin: async (_, { adminInput: { name, email, password } }) => {
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        throw new Error("Admin already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const admin = new Admin({
        name,
        email,
        password: hashedPassword,
      });
      await admin.save();
      return admin;
    },
    deleteAdmin: async (_, { id }) => {
      const admin = await Admin.findByIdAndDelete(id);
      return admin;
    },
    // Admin Login
    async adminLogin(_, { email, password }) {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        throw new Error("Email does not exist");
      }
    
      const isCorrectPassword = await bcrypt.compare(password, admin.password);
      if (!isCorrectPassword) {
        throw new Error("Incorrect password");
      }
    
      return admin;
    },
  },
};

module.exports = resolvers;
