import { PrintStrategyInterface } from '../contracts/PrintStrategyInterface'
import { Person } from '../../customTypes/Person'

export class PrintText implements PrintStrategyInterface {
    
    print(person: Person): void {
        console.log(`Name: ${person.name}, Age: ${person.age}, Email: ${person.email}.`)
    }
}