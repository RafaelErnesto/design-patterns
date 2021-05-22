import { RobotInterface } from "../contracts/RobotInterface";
import { Drone } from "../robots/Drone";

export class DroneControl {

    static getDroneControl(): RobotInterface {
        return new Drone()
    }
}