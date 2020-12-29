import { TransactionType } from '../../../enums/TransactionType'
import { invalidTransactionArguments } from "../../../errors/apiErrors";

let transactionId = 1;

class Transaction {
    type: TransactionType | string;
    amount: number;
    id: string;
    effectiveDate: string;

    constructor (type: TransactionType , amount: number) {
        if (!type || typeof type !== 'string' || !(type.toUpperCase() in TransactionType)) {
            throw invalidTransactionArguments('type', `must be ${Object.keys(TransactionType)}`)
        }

        if (!amount || typeof amount !== 'number') {
            throw invalidTransactionArguments('amount', 'must be a number')
        }

        this.type = type.toLowerCase();
        this.amount = amount;
        this.id = (transactionId++).toString();
        this.effectiveDate = new Date().toISOString();
    }
}

export default Transaction
