import * as React from 'react';
import Transaction from '../../../server/api/components/transactions/model';

interface Props {
    transaction: Transaction;
}

const TransactionDetail = ({ transaction } : Props ) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Id:</strong> {transaction.id}</li>
                <li className="list-group-item"><strong>Type:</strong> {transaction.type}</li>
                <li className="list-group-item"><strong>Amount:</strong> {transaction.amount}</li>
                <li className="list-group-item"><strong>Effective Date:</strong> {transaction.effectiveDate}</li>
            </ul>
        </>
    )
}

export default  TransactionDetail;
