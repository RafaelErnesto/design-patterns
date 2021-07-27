import { Transport } from "./contracts/Transport";
import { PlaneCreator } from "./creators/PlaneCreator";
import { ShipCreator } from "./creators/ShipCreator";

class App {
    transport: Transport

    init(type: string) {
        const creator = this.typeResolver(type);
        creator.createProduct().delivery()
    }

    private typeResolver(type: string) {
        const creators = {
            'ship':  new ShipCreator(),
            'plane': new PlaneCreator(),
        }
        try {
            return creators[type]
        } catch(err) {
            console.log('Invalid type')
        }
    }
}

(() => {
    const app = new App();
    app.init('ship')//Delivered by ship
    app.init('plane')//Delivered by plane
})()