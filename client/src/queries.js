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
