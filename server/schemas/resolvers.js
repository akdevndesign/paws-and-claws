const bcrypt = require('bcrypt');
const { isAdmin, isAuthenticated } = require('./middleware');
const Profile = require('./models/profile');
const Pets = require('./models/pets');
const Admin = require('./models/admin');

const resolvers = {
  Query: {
    // Add any query resolvers here
  },
  Mutation: {
    // User Registration
    async registerUser(_, { name, email, password, phone_number, home_type, pet_experience, other_pets, other_pet_types }) {
      const existingUser = await Profile.findOne({ email });
      if (existingUser) {
        throw new Error('Email already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new Profile({
        name,
        email,
        password: hashedPassword,
        phone_number,
        home_type,
        pet_experience,
        other_pets,
        other_pet_types,
      });

      await user.save();
      return user;
    },

    // Admin Registration
    async registerAdmin(_, { name, email, password }) {
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        throw new Error('Email already exists');
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

    // Pet Creation
    async createPet(_, { name, animal_type, age, image_url, bio, activity_level, cuddliness_level, friendliness_level, health_history }, { isAdmin }) {
      if (!isAdmin) {
        throw new Error('Not authorized');
      }

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

    // User Login
    async login(_, { email, password }) {
      const user = await Profile.findOne({ email });
      if (!user) {
        throw new Error('Email does not exist');
      }

      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        throw new Error('Incorrect password');
      }

      return user;
    },

    // Admin Login
    async adminLogin(_, { email, password }) {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        throw new Error('Email does not exist');
      }

      const isCorrectPassword = await bcrypt.compare(password, admin.password);
      if (!isCorrectPassword) {
        throw new Error('Incorrect password');
      }

      return admin;
    },
  },
};

module.exports = resolvers;