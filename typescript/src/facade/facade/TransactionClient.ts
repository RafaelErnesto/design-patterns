import { TransactionData } from "../contracts/TransactionData";
import { Transaction } from "../payment/Transaction";
import { Validation } from "../payment/Validation";
import { VerifyAccount } from "../payment/VerifyAccount";

export class TransactionClient {
    makeTransaction(data: TransactionData) {
        try {
            this._validate(data)
            if(!this._verifiyAccounts(data)) {
                throw new Error('The transaction was not possible')
            }

            const transaction = new Transaction()
            transaction.makeTransaction(data)

        } catch(err) {
            console.log(err.message)
        }
    }

    private _validate(data: TransactionData) {
        const validation = new Validation()
        validation.validate(data)
    }

    private _verifiyAccounts(data: TransactionData) {
        const verifyClient = new VerifyAccount()
        return verifyClient.verify(data)
    }
}