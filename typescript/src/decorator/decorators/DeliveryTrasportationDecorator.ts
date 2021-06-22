import { DeliveryInterface } from "../contracts/DeliveryInterface";
import { DeliveryBaseDecorator } from "./DeliveryBaseDecorator";

export class DeliveryTrasnportationDecorator extends DeliveryBaseDecorator {

    constructor(delivery: DeliveryInterface) {
        super(delivery)
    }
    
    addToInfo(transp: string): void {
        super.addToInfo(`, it will be transported by ${transp}`)
    }

    send(): void {
        super.send()
    }
}