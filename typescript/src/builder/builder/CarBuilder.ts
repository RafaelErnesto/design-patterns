import { Car } from "./Car"

export class CarBuilder {
    brand: string
    color: string
    model: string
    price: number

    constructor(){
        this.brand = null
        this.color = null
        this.model = null
        this.price = null
    }

    setBrand(brand): CarBuilder {
        this.brand = brand
        return this
    }
    setColor(color): CarBuilder {
        this.color = color
        return this
    }
    setModel(model): CarBuilder {
        this.model = model
        return this
    }
    setPrice(price): CarBuilder {
        this.price = price
        return this
    }
    getCar(): Car {
        return new Car(this.brand, this.color, this.model, this.price)
    }
}