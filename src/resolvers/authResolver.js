const userResolver = {
    Query:{
        userDetailById: async (_, {userId}, {dataSources, userIdToken}) => {
            if(userId == userIdToken){
                return await dataSources.AuthAPI.getUser(userId);
            }
            else {
                return null;
            }
        }
    },
    Mutation: {
        signUpUser: async (_, {userInput}, {dataSources}) => {
            const accountInput = {
                username   : userInput.username,
                balance    : userInput.balance,
                lastChange : (new Date()).toISOString()
            }
            await dataSources.accountAPI.createAccount(accountInput);

            // TO DO change order to add a better logic
            const authInput ={
                username : userInput.username,
                password : userInput.password,
                name     : userInput.name,
                email    : userInput.email
            }
            await dataSources.authAPI.createUser(authInput);
        },
        logIn: async (_, {credentials}, {dataSources}) => {
            return await dataSources.authAPI.authRequest(credentials);
        },
        refreshToken: (_, {token}, {dataSources}) => {
            dataSources.authAPI.refreshToken(token);
        },
        updateUser: async (_, {user}, {dataSources, userIdToken} ) => {
            if(user.id == userIdToken){
                return await dataSources.authAPI.updateUser(user);
            }
            else{
                return null;
            }
        },
        deleteUser: async (_, {userId}, {dataSources, userIdToken} ) => {
            if(userId == userIdToken){
                return await dataSources.authAPI.deleteUser(userId);
            }
            else{
                return null;
            }
        }
    }

};

module.exports = userResolver;