const {RESTDataSource} = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AccountAPI extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = serverConfig.account_api_url;
    }

    async createAccount(account){
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post('/accounts', account);

    }

    async accountByUsername(username){
        return await this.get(`/accounts/${username}`);
    }

    async createTransaction(transaction){
        transaction = new Object(JSON.parse(JSON.stringify(transaction)));
        return await this.post('/transactions', transaction)
    }

    async transactionByUsername(username){
        return await this.get(`/transactions/${username}`);
    }

    async transactionById(transactionId){
        return await this.get(`/transactions/get/${transactionId}`);
    }

    async updateTransaction(transaction){
        transaction = new Object(JSON.parse(JSON.stringify(transaction)));
        return await this.put('/transactions/update', transaction);
    }

    async deleteTransaction(transactionId){
        return await this.delete(`/transactions/delete/${transactionId}`);
    }
}

// Crear el exports para no olvidarse
module.exports = AccountAPI;