import { TransactionType } from "../enums/TransactionType";

export type Transaction = {
    id: string;
    amount: number;
    type: TransactionType;
    effectiveDate: string;
}
