import { DeliveryBaseDecorator } from "./DeliveryBaseDecorator";

export class DeliveryPriorityDecorator extends DeliveryBaseDecorator {

    addToInfo(priority: string): void {
        super.addToInfo(` and have a ${priority} priority level`)
    }

    send(): void {
        super.send()
    }
}