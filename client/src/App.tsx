import * as React from 'react';
import { useEffect, useState } from 'react';

import APIClient from './api'
import TransactionsList from './components/TransactionsList';
import Balance from './components/Balance';


const App = () => {

    const [amount, setAmount] = useState(0);
    const [transactions, setTransactions]= useState([] as any);

    useEffect(() => {
        Promise.all([APIClient.getTransactions(), APIClient.getBalance()])
        .then((result: any[]) => {
            const [transactionsData, balanceData] = result;

            setTransactions(transactionsData);
            setAmount(balanceData);
        }).catch(() => console.log('There was an error fetching data'))
    }, []);

    return (
        <div className={'container'}>
            <h1>Accounting Notebook</h1>
            <Balance amount={amount}/>
            <TransactionsList transactions={transactions}/>
        </div>
    )
};

export default App;
