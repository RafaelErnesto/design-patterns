import { PrintStrategyInterface } from '../contracts/PrintStrategyInterface'
import { Person } from '../../customTypes/Person'

export class PrintJson implements PrintStrategyInterface {
    
    print(person: Person): void {
        console.log(JSON.stringify(person))
    }
}