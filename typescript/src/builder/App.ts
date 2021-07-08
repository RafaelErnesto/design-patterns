import { CarBuilder } from "./builder/CarBuilder";

(() => {
    const builder = new CarBuilder();
    const car = builder
        .setBrand('Ford')
        .setModel('Mustang')
        .setColor('Black')
        .setPrice(50.000)
        .getCar()
        
    car.getInfo()
})();