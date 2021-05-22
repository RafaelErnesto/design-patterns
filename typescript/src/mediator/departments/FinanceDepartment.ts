import { MediatorInterface } from "../contracts/MediatorInterface";
import { Department } from "./Department";

export class FinanceDepartment extends Department {
    name: string
    constructor(mediator: MediatorInterface) {
        super(mediator)
        this.name = 'FinanceDepartment'
    }

    registerSupplyPurchase(purchaseDescription: string) {
        console.log(`New purchase registered: ${purchaseDescription}`)
    }
}