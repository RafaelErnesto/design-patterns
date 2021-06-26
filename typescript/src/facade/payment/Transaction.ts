import { TransactionData } from "../contracts/TransactionData";
import * as accounts from '../data/accounts.json'
export class Transaction {
    makeTransaction(data: TransactionData) {
        console.log(`The value of ${data.value} was sent to ${accounts[data.to].name}`)
    }
}