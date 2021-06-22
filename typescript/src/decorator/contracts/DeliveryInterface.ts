export interface DeliveryInterface {
    deliveryInfo():string
    addToInfo(info: string):void
    send():void
}