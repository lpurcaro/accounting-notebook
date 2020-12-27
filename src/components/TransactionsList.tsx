import * as React from 'react';
import { Accordion } from "react-bootstrap";
import TransactionRow from "./TransactionRow";
import {Transaction} from "../typings/Transaction";

interface Props {
    transactions: Transaction[];
}

const TransactionsList = ( { transactions } : Props ) => {
    return (
        <>
            <h2>Transactions History</h2>
            <Accordion >
                { transactions.map(transaction => <TransactionRow transaction={transaction} key={transaction.id}/>) }
            </Accordion>
        </>
    )
}

export default  TransactionsList;
