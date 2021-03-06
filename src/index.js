const { ApolloServer } = require('apollo-server');

// Get all components created
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authentication = require('./utils/authentication');
const AuthAPI = require('./dataSources/authAPI');
const AccountAPI = require('./dataSources/accountAPI');


// Create ApolloServer instance
const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI: new AuthAPI(),
        accountAPI: new AccountAPI(),
    }),
    introspection: true,
    playground: true
});

// Check listen port 
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
}
);