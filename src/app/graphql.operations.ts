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
const GET_GIGS_BY_USER = gql`
query Query {
  gigByUser {
    title
    description
    user {
      username
    }
    id
    price
    image
    category
    createdAt
  }
}
`;
const UPDATE_GIG = gql`
mutation Mutation($updateGigId: ID!, $input: UpdateGigInput) {
  updateGig(id: $updateGigId, input: $input) {
    id
    title
    description
    user {
      username
    }
    price
    image
    category
    createdAt
    updatedAt
  }
}
`;
const DELETE_GIG = gql`
mutation Mutation($deleteGigId: ID!) {
  deleteGig(id: $deleteGigId) {
    status
    message
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
const ORDER=gql`
mutation Mutation($gigId: String!) {
  createOrder(gigId: $gigId) {
    id
    url
  }
}
`;
const GET_ORDERS=gql`
query Query {
  orders {
    id
    title
    customer {
      username
    }
    freelancer {
      username
    }
    price
    status
    createdAt
    updatedAt
  }
}
`;
const GET_USER=gql`
query LogedUser {
  logedUser {
    firstname
    lastname
    username
    email
    password
    gender
    birthday
    role
  }
}
`;
const UPDATE_USER=gql`
mutation Mutation($input: UpdateInput) {
  updateUser(input: $input) {
    firstname
    lastname
    username
    email
    password
    gender
    birthday
    role
  }
}
`;
const DELETE_USER=gql`
mutation Mutation {
  deleteUser {
    status
    message
  }
}
`;






export { DELETE_GIG,GET_GIGS, REGISTRE,LOGIN , GIG, ADDGIG,ORDER,GET_ORDERS,GET_USER,UPDATE_USER ,DELETE_USER,GET_GIGS_BY_USER,UPDATE_GIG};
