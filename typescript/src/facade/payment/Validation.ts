import { TransactionData } from "../contracts/TransactionData";

export class Validation {
    validate(data: TransactionData) {
        if(data.date.toString() < Date.now().toString()) {
            throw new Error('Transaction not possible for a previous date')
        }

        if(data.value <= 0) {
            throw new Error('Value must be greater than zero')
        }

        if(data.from === data.to) {
            throw new Error('Cannot make transaction to the same account')
        }
    }
}