import { DeliveryInterface } from "./contracts/DeliveryInterface";
import { DeliveryPriorityDecorator } from "./decorators/DeliveryPriorityDecorator";
import { DeliveryTrasnportationDecorator } from "./decorators/DeliveryTrasportationDecorator";
import { Delivery } from "./delivery/Delivery";

class App {

    delivery: DeliveryInterface

    init(destination: string) {
        this.delivery = new Delivery(destination)
        return this
    } 

    setTransportationType(type: string) {
        this.delivery =  new DeliveryTrasnportationDecorator(this.delivery)
        this.delivery.addToInfo(type)
        return this
    }

    setPriorityLevel(priority: string) {
        this.delivery = new DeliveryPriorityDecorator(this.delivery)
        this.delivery.addToInfo(priority)
        return this
    }

    deliveryInfo() {
       console.log(this.delivery.deliveryInfo())
    }

    finish() {
        this.delivery.send()
    }
}

(() => {
    const app1 = new App()
    app1.init('Paris')
        .setTransportationType('plane')
        .deliveryInfo() // The delivery's destination is: Paris, it will be transported by plane
        
    app1.finish()

    const app2 = new App()
    app2.init('Paris')
        .setPriorityLevel('high')
        .deliveryInfo()//The delivery's destination is: Paris and have a high priority level
        
    
    app2.finish()
})()