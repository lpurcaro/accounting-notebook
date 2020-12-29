import axios from 'axios';

import Transaction from '../models/Transaction';

class APIClient {
    static API_URL = 'http://localhost:8080/api';

    static endpoints = {
        transactions: '/transactions',
        balance: '/'
    };

    static getTransactions = async() : Promise<Transaction[]> => {
        const url = APIClient.API_URL + APIClient.endpoints.transactions;

        return await axios(url)
            .then((response) => response.data)
            .then((data) => data.transactions);
    }

    static getBalance = async() : Promise<number> => {
        const url = APIClient.API_URL + APIClient.endpoints.balance;

        return await axios(url)
            .then((response) => response.data)
            .then((data) => data.balance);
    }
}

export default APIClient
