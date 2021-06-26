import { TransactionData } from "./contracts/TransactionData";
import { TransactionClient } from "./facade/TransactionClient";

class App {
    private transactionClient: TransactionClient

    constructor() {
        this.transactionClient = new TransactionClient()
    }

    makeTransaction(data: TransactionData) {
        this.transactionClient.makeTransaction(data)
    }
}


(()=> {
    const app = new App()
    //output : The value of 900 was sent to Mary
    app.makeTransaction({
        from:"1d0bd0ae-cc21-4578-b13e-9278503ff6f2",
        to:"d7c44b80-301d-4618-a99f-867de37084a1",
        value:900,
        date: new Date()
    })
    //output: The transaction was not possible
    app.makeTransaction({
        from:"1d0bd0ae-cc21-4578-b13e-9278503ff6f2",
        to:"d7c44b80-301d-4618-a99f-867de37084a1",
        value:1500,
        date: new Date()
    })

    //output: Value must be greater than zero
    app.makeTransaction({
        from:"1d0bd0ae-cc21-4578-b13e-9278503ff6f2",
        to:"d7c44b80-301d-4618-a99f-867de37084a1",
        value:0,
        date: new Date()
    })
})()