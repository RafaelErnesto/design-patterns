import { Transport } from "../contracts/Transport";
import { Ship } from "../transports/Ship";
import { Creator } from "./Creator";

export class ShipCreator extends Creator {
    createProduct(): Transport {
        return new Ship();
    }
    
}