import { TransactionType } from '../enums/TransactionType';

export default class Transaction {
    type: TransactionType;
    amount: number;
    id: string;
    effectiveDate: string;

    constructor (type: TransactionType, amount: number, id: string, effectiveDate: string) {
        this.type = type;
        this.amount = amount;
        this.id = id;
        this.effectiveDate = effectiveDate;
    }
}
