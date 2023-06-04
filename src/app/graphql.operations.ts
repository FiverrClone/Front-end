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
      price
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

const GIG=gql`
query ExampleQuery($gigId: ID!) {
  gig(id: $gigId) {
    id
    title
    description
    user {
      username
      email
      id
    }
    image
    category
    createdAt
    updatedAt
  }
}

`;

const ADDGIG=gql`
mutation CreateGig($input: CreateGigInput) {
  createGig(input: $input) {
    id
    title
    description
    price
    image
    category
    createdAt
    updatedAt
  }
}
`;


export { GET_GIGS, REGISTRE,LOGIN , GIG, ADDGIG};
