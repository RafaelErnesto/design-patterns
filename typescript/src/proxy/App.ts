import { ServiceInterface } from "./contracts/ServiceInterface";
import { NginxProxy } from "./proxies/NginxProxy";
import { Nginx } from "./services/Nginx";

class App {

    getClient(credentials: string): any {
        if(credentials === 'admin') {
            return new Nginx('123456')
        } else {
            return new NginxProxy(new Nginx('123456'))
        }
    }
}

(() => {
    const app = new App()
    const nginx1 = app.getClient('admin')
    nginx1.reboot()//Works OK
    const nginx2 = app.getClient('dev')
    nginx2.reboot()// Throw an error
})()