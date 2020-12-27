import { TransactionType } from '../enums/TransactionType';
import { Transaction } from '../typings/Transaction';

export const calculateBalance = (accumulator: number, transaction: Transaction) : number => {
    let balance = 0;

    if (transaction.type === TransactionType.DEBIT) {
        balance = accumulator + transaction.amount
    } else if (transaction.type === TransactionType.CREDIT) {
        balance = accumulator - transaction.amount
    }

    return balance
}
