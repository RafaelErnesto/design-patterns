import { Person } from "../customTypes/Person";
import { PrintResolverInterface } from "./contracts/PrintResolverInterface";
import printResolver from "./resolvers/PrintResolver";

class Printer {
    
    resolver: PrintResolverInterface

    constructor(resolver: PrintResolverInterface) {
        this.resolver = resolver
    }

    print(person: Person, type: string) {
        const printer = this.resolver.resolve(type)
        printer.print(person)
    }
}

(() => {
    const printer = new Printer(printResolver)
    printer.print({
        name: 'Jhon',
        age: 28,
        email: 'john@mail.com'
    },'json')

    printer.print({
        name: 'Jhon',
        age: 28,
        email: 'john@mail.com'
    },'table')

    printer.print({
        name: 'Jhon',
        age: 28,
        email: 'john@mail.com'
    },'text')

})()