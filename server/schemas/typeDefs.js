const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Admin {
  _id: ID!
  name: String!
  email: String!
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

type Pet {
  _id: ID!
  name: String!
  animal_type: String!
  age: Int!
  image_url: String!
  bio: String!
  activity_level: Int!
  cuddliness_level: Int!
  friendliness_level: Int!
  health_history: String!
}

type User {
  _id: ID!
  name: String!
  email: String!
  phone_number: String!
  home_type: String!
  pet_experience: Int!
  other_pets: String!
  other_pet_types: String
}

input AdminInput {
  name: String!
  email: String!
  password: String!
}

input UserInput {
  name: String!
  email: String!
  password: String!
  phone_number: String!
  home_type: String!
  pet_experience: Int!
  other_pets: String!
  other_pet_types: String
}

input PetInput {
  name: String!
  animal_type: String!
  age: Int!
  image_url: String!
  bio: String!
  activity_level: Int!
  cuddliness_level: Int!
  friendliness_level: Int!
  health_history: String!
}

type Query {
  admin(email: String!): Admin
  user(email: String!): User
  pets: [Pet!]!
  getPets: [Pet!]!
  getPetById(id: ID!): Pet
  getUsers: [User!]!
  getUserById(id: ID!): User
}

type Mutation {
  createAdmin(adminInput: AdminInput): Admin
  deleteAdmin(id: ID!): Admin
  createUser(userInput: UserInput): AuthData
  deleteUser(id: ID!): User
  adminLogin(email: String!, password: String!): Admin
  createPet(petInput: PetInput): Pet
  deletePet(petId: ID!): Pet
  updatePet(petId: ID!, petInput: PetInput): Pet
}
`;

module.exports = typeDefs;