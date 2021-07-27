import { Transport } from "../contracts/Transport";
import { Plane } from "../transports/Plane";
import { Creator } from "./Creator";

export class PlaneCreator extends Creator {
    createProduct(): Transport {
        return new Plane();
    }
    
}