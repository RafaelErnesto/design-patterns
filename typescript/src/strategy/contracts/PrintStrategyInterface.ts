import { Person } from '../../customTypes/Person'
export interface PrintStrategyInterface {  
    print(person: Person): void
}