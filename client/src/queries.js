import { gql } from 'apollo-boost';

// Mutaciones 
// Pesito estoy declarando el tipo de dato que tiene la variable
// Sin pesito asignas el valor 

export const SIGNIN_USER = gql`
mutation($username: String!, $password: String!){
    signinUser(username: $username, password: $password){
        token
        }
    }
`;

export const GET_FOOD_LIST = gql `
  query{
      getProducts{
          _id
          name
          price
          shift
      }
  }
  `;

export const ADD_ORDER = gql `
  mutation(
      $product: [Product]!
      $drink: [Drink]!
      $total: Int!
      $client: String!
      $status: Boolean!
      $side: String
      $extra: String
  ) {
      addOrder(
          product: $product
          drink: $drink
          total: $total
          client: $client
          status: $status
          side: $side
          extra: $extra
      )
      {
          _id
          product
          drink
          total
          client
          status
          side
          extra
      }
  }
`