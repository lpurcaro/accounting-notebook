import * as TransactionService from './service';
import * as BalanceService from '../balance/service';

import Transaction from './model';
import { transactionNotFound } from "../../../errors/apiErrors";

export const getTransactions = async (req, res) => {
    const transactions = await TransactionService.getAll()
    res.json({ transactions })
}

export const addTransaction = async (req, res) => {
    const newTransaction = req.body;
    const transaction = new Transaction(newTransaction.type, newTransaction.amount);

    await BalanceService.updateBalance(transaction);
    await TransactionService.add(transaction);
    res.json({ transaction })
}

export const getTransactionById = async (req, res) => {
    const transaction = await TransactionService.getById(req.params.transactionId);

    if (!transaction) {
        throw transactionNotFound(req.params.transactionId)
    }

    res.json({ transaction })
}

