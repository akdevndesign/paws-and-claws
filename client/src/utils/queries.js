import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query GetPets {
    getPets {
      _id
      name
      age
      image_url
      animal_type
    }
  }
`;

export const QUERY_PET = gql`
  query getOnePet($id: ID!) {
    getPetById(id: $id) {
      activity_level
      age
      bio
      cuddliness_level
      friendliness_level
      image_url
      name
    }
  }
`;
