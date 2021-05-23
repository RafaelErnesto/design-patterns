import { MediatorInterface } from "./contracts/MediatorInterface";
import { Department } from  './departments/Department'
import { EducationDepartment } from "./departments/EducationDepartment";
import { FinanceDepartment } from "./departments/FinanceDepartment";
import { JusticeDepartment } from "./departments/JusticeDepartment";

export class DepartmentMediator implements MediatorInterface {

    senders:any

    constructor() {

        const financeDepartment = new FinanceDepartment(this)
        const educationDepartment = new EducationDepartment(this)
        const justiceDepartment = new JusticeDepartment(this)

        this.senders = {
            financeDepartment,
            educationDepartment,
            justiceDepartment
        }
    }

    notify(sender: Department, event: string, data: string): void {
        this.resolve(sender, event, data)
    }

    resolve(sender: Department, event: string, data: string): void {
        if(event === 'purchase' && sender == this.senders.educationDepartment) {
            this.senders.financeDepartment.registerSupplyPurchase(`From Department of Education: ${data}`)
        }

        if(event === 'purchase' && sender == this.senders.justiceDepartment) {
            this.senders.financeDepartment.registerSupplyPurchase(`From Department of Justice: ${data}`)

        }
    }
}

(() => {
    const cityHall = new DepartmentMediator()
    cityHall.senders.educationDepartment.registerSupplyPurchase('500 new books for the public library.')
    cityHall.senders.justiceDepartment.registerSupplyPurchase('New chairs for the main office.')
})()