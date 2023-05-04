const { Profile } = require('../models');

const resolvers = {
  Query: {
    profiles: async () => {
      return Pets.find();
    },

    profile: async (parent, { petId }) => {
      return Pets.findOne({ _id: petId });
    },
  },

  Mutation: {
    addProfile: async (parent, { name }) => {
      return Pets.create({ name });
    },
    addSkill: async (parent, { petId, skill }) => {
      return Pets.findOneAndUpdate(
        { _id: petId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePet: async (parent, { petId }) => {
      return Profile.findOneAndDelete({ _id: petId });
    },
    removeSkill: async (parent, { petId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
