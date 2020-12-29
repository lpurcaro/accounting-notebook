import Transaction from './model';

const transactions : Transaction[] = [];

export const getAll = async () => {
    return [...transactions];
}
export const add = async (transaction : Transaction) => {
    transactions.push(transaction)
}

export const getById = async (id : string) => {
    return transactions.find(e => e.id === id)
}
