import { Transport } from "../contracts/Transport";

export abstract class Creator {
    abstract createProduct(): Transport
}