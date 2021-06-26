import { TransactionData } from "../contracts/TransactionData";
import * as accounts from '../data/accounts.json'

export class VerifyAccount {
    verify(data: TransactionData) {
        return (accounts[data.from] && data.value <= accounts[data.from].money && accounts[data.to])
    }
}