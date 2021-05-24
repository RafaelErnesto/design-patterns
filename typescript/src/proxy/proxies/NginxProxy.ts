import { ServiceInterface } from "../contracts/ServiceInterface";

export class NginxProxy implements ServiceInterface {
    service: ServiceInterface

    constructor(service: ServiceInterface) {
        this.service = service
    }
    
    getInfo(): void {
        this.service.getInfo()
    }
}