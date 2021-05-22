import { MediatorInterface } from "../contracts/MediatorInterface";
import { Department } from "./Department";

export class EducationDepartment extends Department {

    name: string
    
    constructor(mediator: MediatorInterface) {
        super(mediator)
        this.name = 'EducationDepartment'
    }

}