import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query me {
    user {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;
