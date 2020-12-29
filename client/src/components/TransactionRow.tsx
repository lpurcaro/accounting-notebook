import * as React from 'react';
import { Accordion, Card } from 'react-bootstrap';

import TransactionDetail from './TransactionDetail';
import Transaction from '../models/Transaction';
import { TransactionType } from '../enums/TransactionType';

interface Props {
    transaction: Transaction;
}

const TransactionRow = ({ transaction } : Props ) => {

    const colors = {
        [TransactionType.CREDIT]: '#CCE5FF',
        [TransactionType.DEBIT]: '#D4EDDA'
    }

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={transaction.id} style={{ backgroundColor: colors[transaction.type]}}>
                <span className={'text-uppercase'}>{transaction.type} - {transaction.amount}</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={transaction.id}>
                <Card.Body>
                    <TransactionDetail transaction={transaction}/>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default TransactionRow;
