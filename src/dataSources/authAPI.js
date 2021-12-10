const {RESTDataSource} = require('apollo-datasource-rest');
const { account_api_url } = require('../server');
const serverConfig = require('../server');

class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async createUser (user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        //user = new Object(user);
        return await this.post('/user/', user);
    }
    
    async getUser(userId){
        return await this.get(`/user/${userId}`);
    }
    
    async updateUser (user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        let userId = user.id;
        return await this.put(`/user/update/${userId}/`, user);
        
    }

    async deleteUser(userId){
        return await this.delete(`/user/delete/${userId}/`);

    }

    async authRequest (credentials){
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post('/login/', credentials);
    }

    async refreshToken (token){
        token = new Object(JSON.parse(JSON.stringify(token)));
        return await this.post('/refresh/', token);
    }
}

module.exports = AuthAPI;