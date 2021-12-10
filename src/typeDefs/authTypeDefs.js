const {gql} = require('apollo-server');

const authTypes = gql `
    type Tokens{
        refresh :String!
        access  :String!
    }

    type Access{
        access :String!
    }

    type CredentialsInput{
        username :String!
        password :String!
    }

    input SignUpInput {
        username :String!
        password :String!
        name     :String!
        email    :String!
        balance  :Int!
    }

    type UserDetail {
        id       :Int!
        username :String!
        password :String!
        name     :String!
        email    :String!
    }

    type UserUpdate {
        id       :Int!
        password :String!
        name     :String!
    }

    type Mutation {
        signUpUser(userInput : $SignUpInput)       : Tokens!
        logIn(credentials    : $CredentialsInput!) : Tokens!
        refreshToken(token : String!)              : Access!
        updateUser(user: UserUpdate!)              :UserDetail!
        deleteUser(userId: String!)                : String!
    }

    type Query {
        userDetailById(userId : Int!) : UserDetail!
    }    
`;

module.exports = authTypes;