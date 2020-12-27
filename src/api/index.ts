import {Transaction} from "../typings/Transaction";
import {TransactionType} from "../enums/TransactionType";

class APIClient {

    async getTransactions() : Promise<Transaction[]> {
        return [
            {
                "id": "0",
                "type": TransactionType.CREDIT,
                "amount": 10,
                "effectiveDate": "2020-12-26T20:08:14.252Z"
            },
            {
                "id": "1",
                "type": TransactionType.DEBIT,
                "amount": 20,
                "effectiveDate": "2020-12-26T20:08:14.252Z"
            }
        ];
    }
}

export default new APIClient()
