export class Car {
    brand: string
    color: string
    model: string
    price: number

    constructor(brand, color, model, price){
        this.brand = brand
        this.color = color
        this.model = model
        this.price = price
    }

    getInfo() {
        console.log(`The car info is: brand: ${this.brand}, 
        color: ${this.color}, model: ${this.model} and price: ${this.price}`)
    }
}