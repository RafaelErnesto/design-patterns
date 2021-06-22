import { DeliveryInterface } from "../contracts/DeliveryInterface";

export  class DeliveryBaseDecorator implements DeliveryInterface {

    delivery: DeliveryInterface
    info: string

    constructor(delivery: DeliveryInterface) {
        this.delivery = delivery
        this.info = this.delivery.deliveryInfo()
    }

    addToInfo(info: string): void {
        this.info += info
    }

    deliveryInfo(): string {
        return this.info
    }

    send(): void {
        this.delivery.send()
    }
}