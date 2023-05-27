import { gql } from 'apollo-angular';

const GET_GIGS = gql`
  query Query {
    gigs {
      id
      title
      description
      user {
        username
      }
      image
      category
      createdAt
    }
  }
`;

const REGISTRE = gql`
  mutation Mutation($registerInput: RegisterInput!) {
    registerUser(registerInput: $registerInput) {
      id
      firstname
      lastname
      username
      email
      password
      gender
      birthday
      role
      token
    }
  }
`;

const LOGIN= gql`
  mutation Mutation($loginInput: LoginInput) {
  loginUser(loginInput: $loginInput) {
    id
    firstname
    lastname
    username
    email
    password
    gender
    birthday
    role
    token
  }
}
`;
export { GET_GIGS, REGISTRE,LOGIN };
