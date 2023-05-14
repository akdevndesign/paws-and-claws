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

export const SUBMIT_APPLICATION_MUTATION = gql`
  mutation SubmitApplication($petId: ID!, $application: String!) {
    submitApplication(petId: $petId, application: $application) {
      name
      applications
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

export const CREATE_PET = gql`
  mutation CreatePet($petInput: PetInput!) {
    createPet(petInput: $petInput) {
      _id
      name
      animal_type
      age
      image_url
      bio
      health_history
      activity_level
      cuddliness_level
      friendliness_level
    }
  }
`;

export const DELETE_PET = gql`
  mutation DeletePet($petId: ID!) {
    deletePet(petId: $petId) {
      _id
      name
    }
  }
`;
