import { Transport } from "../contracts/Transport";

export class Ship implements Transport {
    delivery(): void {
        console.log('Delivered by ship')
    }
    
}