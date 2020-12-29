import Balance from './model';
import Transaction from "../transactions/model";
import {TransactionType} from "../../../enums/TransactionType";

const balance : Balance = new Balance();

export const getAccountBalance = async () => {
    return balance.amount;
}

const addAmount = async (amount: number) => {
    return balance.addAmount(amount);
}

const substractAmount = async (amount: number) => {
    return balance.substractAmount(amount);
}

export const updateBalance = async (transaction: Transaction) => {
    if (transaction.type === TransactionType.DEBIT) {
        await addAmount(transaction.amount)
    } else {
        await substractAmount(transaction.amount)
    }
}
