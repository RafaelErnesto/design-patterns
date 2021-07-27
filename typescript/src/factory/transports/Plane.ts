import { Transport } from "../contracts/Transport";

export class Plane implements Transport {
    delivery(): void {
        console.log('Delivered by plane')
    }
    
}