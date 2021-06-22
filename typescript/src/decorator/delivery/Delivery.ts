import { DeliveryInterface } from "../contracts/DeliveryInterface";

export class Delivery implements DeliveryInterface {

    info: string
    destination: string

    constructor(destination: string) {
        this.info = `The delivery's destination is: ${destination}`
    }

    deliveryInfo(): string {
        return this.info
    }
    
    addToInfo(info): void {
        this.deliveryInfo() + info
    }

    send(): void {
        console.log('Sending delivery...')
    }
}