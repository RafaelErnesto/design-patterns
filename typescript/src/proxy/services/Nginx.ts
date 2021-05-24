import { ServiceInterface } from '../contracts/ServiceInterface'

export class Nginx implements ServiceInterface {

    info: string
    isOn: boolean
    password: string

    constructor(passowrd: string) {
        this.password = passowrd
        this.isOn = true
        this.info = `Nginx service running on Ubuntu 18.04 LTS`
    }

    setPassword(newPassowrd: string): void {
        this.password = newPassowrd
        console.log('Successfully changed the password!')
    }

    turnOff(): void {
        this.isOn = false
        console.log('Server is down')
    }

    turnOn(): void {
        this.isOn = true
        console.log('Server is up')
    }

    reboot(): void {
        this.isOn = false
        console.log('Server shutdown')
        this.isOn = true
        console.log('Server is up again...')
    }

    getInfo(): void {
        console.log(this.info)
    }
}