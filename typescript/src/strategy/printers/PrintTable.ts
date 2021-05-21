import { PrintStrategyInterface } from '../contracts/PrintStrategyInterface'
import { Person } from '../../customTypes/Person'

export class PrintTable implements PrintStrategyInterface {
    
    print(person: Person): void {
        console.table(person)
    }
}