import { Tool } from "./contracts/Tool";
import { Hammer } from "./prototypes/Hammer";

class App {

    tools: Array<Tool>;

    constructor() {
        this.tools = [];
        this.tools.push(new Hammer('medium', 'Tools', 12.5))
    }

    addCopy(): void {
        this.tools.push(this.tools[0].clone())
    }

    printTools() {
        this.tools.forEach(tool => {
            console.log(tool.toString())
        });
    }
}

(() => {
    const app = new App()
    app.addCopy();
    app.printTools()
})();

