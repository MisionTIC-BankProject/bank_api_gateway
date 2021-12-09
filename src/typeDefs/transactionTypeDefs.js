const {gql} = require('apollo-server');

const transactionTypes = gql `
    type Transaction {
        id              :String!
        usernameOrigin  :String!
        usernameDestiny :String!
        value           :Int!
        note            :String!
        date            :String!
    }

    type TransactionInput {
        usernameOrigin  :String!
        usernameDestiny :String!
        value           :Int!
        note            :String!
    }

    type TransactionUpdate {
        id   :String!
        note :String!
    }

    extend type Query{
        transactionByUsername(username:String!) :[Transaction]
    }

    extend type Mutation{
        createTransaction(transaction: TransactionInput!) :Transaction
        updateTransaction(transaction: TransactionUpdate) :Transaction
        deleteTransaction(username: String!) :String!
    }
`;

module.exports = transactionTypes;