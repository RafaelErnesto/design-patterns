import { CommandInterface } from "../contracts/CommandInterface";

export class Button {

    command: CommandInterface

    constructor(command: CommandInterface) {
        this.command = command
    }

    press() {
        this.command.execute()
    }
}