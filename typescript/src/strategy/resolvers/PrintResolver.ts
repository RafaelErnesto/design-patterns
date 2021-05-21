import { PrintResolverInterface } from "../contracts/PrintResolverInterface";
import { PrintStrategyInterface } from "../contracts/PrintStrategyInterface";
import { PrintJson } from "../printers/PrintJson";
import { PrintTable } from "../printers/PrintTable";
import { PrintText } from "../printers/PrintText";

class PrintResolver implements PrintResolverInterface {

    printers: any

    constructor() {
        this.printers = {
            text: new PrintText(),
            json: new PrintJson(),
            table: new PrintTable()
        }
    }

    resolve(word: string): PrintStrategyInterface {
        return this.printers[word]
    }
}

const printResolver = new PrintResolver()
export default printResolver