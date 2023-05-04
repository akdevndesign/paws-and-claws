const { gql } = require("apollo-server");

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    phone_number: String!
    home_type: String!
    pet_experience: Int!
    other_pets: String!
    other_pet_types: String!
  }

  type Pets {
    _id: ID!
    name: String!
    animal_type: String!
    age: Int
    image_url: String!
    bio: String!
    activity_level: Int!
    cuddliness_level: Int!
    friendliness_level: Int!
    health_history: String!
  }

  type Admin {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    pets: [Pets]!
    pet(petId: ID!): Pets
  }

  type Mutation {
    addProfile(
      name: String!
      email: String!
      password: String!
      phone_number: String!
      home_type: String!
      pet_experience: Int!
      other_pets: String!
      other_pet_types: String!
    ): Profile!
    addPet(
      name: String!
      animal_type: String!
      age: Int
      image_url: String!
      bio: String!
      activity_level: Int!
      cuddliness_level: Int!
      friendliness_level: Int!
      health_history: String!
    ): Pets!
    removeProfile(profileId: ID!): Profile
    removePet(petId: ID!): Pets
  }
`;

module.exports = typeDefs;
