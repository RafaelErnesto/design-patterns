import { CommandInterface } from "../contracts/CommandInterface";
import { RobotInterface } from "../contracts/RobotInterface";

export class MoveDroneLeft implements CommandInterface {
    robot: RobotInterface

    constructor(robot: RobotInterface){
        this.robot = robot
    }

    execute(): void {
        this.robot.moveLeft()
    }
}