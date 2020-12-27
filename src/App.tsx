import * as React from 'react';
import { useEffect, useState } from 'react';

import APIClient from './api'
import { calculateBalance } from './utils/transactions';
import TransactionsList from "./components/TransactionsList";
import {Transaction} from "./typings/Transaction";
import Balance from "./components/Balance";


const App = () => {

    const [amount, setAmount] = useState(0);
    const [transactions, setTransactions]= useState([] as any);

    useEffect(() => {
        APIClient.getTransactions().then((result: Transaction[]) => {
                setTransactions(result);
                const balance : number = result.reduce(calculateBalance, 0);
                setAmount(balance);
        })
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
