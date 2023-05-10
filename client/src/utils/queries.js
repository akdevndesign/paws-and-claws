import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
query GetPets {
  getPets {
    _id
    name
    age
    image_url
  }
}
`;
