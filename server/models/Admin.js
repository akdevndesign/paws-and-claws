const { Profile, Pets, Admin } = require("../models");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findById(profileId);
    },
    pets: async () => {
      return Pets.find();
    },
    pet: async (parent, { petId }) => {
      return Pets.findById(petId);
    },
  },
  Mutation: {
    addProfile: async (
      parent,
      {
        name,
        email,
        password,
        phone_number,
        home_type,
        pet_experience,
        other_pets,
        other_pet_types,
      }
    ) => {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const profile = new Profile({
        name,
        email,
        password: hashedPassword,
        phone_number,
        home_type,
        pet_experience,
        other_pets,
        other_pet_types,
      });
      return profile.save();
    },
    updateProfile: async (
      parent,
      {
        profileId,
        name,
        email,
        password,
        phone_number,
        home_type,
        pet_experience,
        other_pets,
        other_pet_types,
      }
    ) => {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return Profile.findByIdAndUpdate(
        profileId,
        {
          name,
          email,
          password: hashedPassword,
          phone_number,
          home_type,
          pet_experience,
          other_pets,
          other_pet_types,
        },
        { new: true }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findByIdAndRemove(profileId);
    },
    addPet: async (
      parent,
      {
        name,
        animal_type,
        age,
        image_url,
        bio,
        activity_level,
        cuddliness_level,
        friendliness_level,
        health_history,
      }
    ) => {
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
      return pet.save();
    },
    updatePet: async (
      parent,
      {
        petId,
        name,
        animal_type,
        age,
        image_url,
        bio,
        activity_level,
        cuddliness_level,
        friendliness_level,
        health_history,
      }
    ) => {
      return Pets.findByIdAndUpdate(
        petId,
        {
          name,
          animal_type,
          age,
          image_url,
          bio,
          activity_level,
          cuddliness_level,
          friendliness_level,
          health_history,
        },
        { new: true }
      );
    },
    removePet: async (parent, { petId }) => {
      return Pets.findByIdAndRemove(petId);
    },
    addAdmin: async (parent, { name, email, password }) => {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const admin = new Admin({ name, email, password: hashedPassword });
      return admin.save();
    },
    updateAdmin: async (parent, { adminId, name, email, password }) => {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return Admin.findByIdAndUpdate(
        adminId,
        { name, email, password: hashedPassword },
        { new: true }
      );
    },
    removeAdmin: async (parent, { adminId }) => {
      return Admin.findByIdAndRemove(adminId);
    },
  },
};

module.exports = resolvers;
