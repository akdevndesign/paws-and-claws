import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_PET = gql`
  mutation UpdatePet($petId: ID!, $petInput: PetInput!) {
    updatePet(petId: $petId, petInput: $petInput) {
      _id
      name
      animal_type
      age
      image_url
      bio
      activity_level
      cuddliness_level
      friendliness_level
      health_history
    }
  }
`;
