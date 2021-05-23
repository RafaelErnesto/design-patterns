import { MediatorInterface } from "../contracts/MediatorInterface";
import { Department } from "./Department";

export class JusticeDepartment extends Department {

    name: string

    constructor(mediator: MediatorInterface) {
        super(mediator)
        this.name = 'JusticeDepartment'
    }

}