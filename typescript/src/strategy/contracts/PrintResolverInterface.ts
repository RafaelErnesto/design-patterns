import { PrintStrategyInterface } from "./PrintStrategyInterface";

export interface PrintResolverInterface {
    resolve(type: string): PrintStrategyInterface
}