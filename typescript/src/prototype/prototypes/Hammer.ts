import { Tool } from "../contracts/Tool";

export class Hammer implements Tool {
    size: string
    brand: string
    price: number

    constructor(size: string, brand: string, price: number) {
        this.size = size
        this.brand = brand
        this.price = price
    }

    clone(): Tool {
        return new Hammer(this.size, this.brand, this.price)
    }
    
    toString() {
        console.log(`This tool is a hammer, with size: ${this.size}, brand: ${this.brand} and price ${this.price}`)
    }
}