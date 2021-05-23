import { MediatorInterface } from "../contracts/MediatorInterface";

export abstract class Department {
    mediator: MediatorInterface

    constructor(mediator: MediatorInterface) {
        this.mediator = mediator
    }

    registerSupplyPurchase(purchaseDescription: string) {
        this.mediator.notify(this, 'purchase', purchaseDescription)
    }
}