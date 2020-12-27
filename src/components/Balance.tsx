import * as React from 'react';
import { Alert } from "react-bootstrap";

interface Props {
    amount: number;
}

const Balance = ({ amount } : Props ) => {
    return (
        <Alert variant='dark' className={'my-5'}>
            <h2 className={'text-center'}>Account Balance: <span className={'font-weight-bold'}>{amount}</span></h2>
        </Alert>
    )
}

export default  Balance;
