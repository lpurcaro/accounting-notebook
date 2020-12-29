import {insufficientFunds} from '../../../errors/apiErrors';

class Balance {
    amount: number;

    constructor () {
        this.amount = 0;
    }

    addAmount = (quantity: number) => {
        this.amount += quantity;
    };

    substractAmount = (quantity: number) => {
        if (quantity > this.amount) {
            throw insufficientFunds(this.amount)
        }

        this.amount -= quantity;
    };
}

export default Balance
