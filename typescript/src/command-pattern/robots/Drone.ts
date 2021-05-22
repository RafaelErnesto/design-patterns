import { RobotInterface } from "../contracts/RobotInterface";

export class Drone implements RobotInterface {

    on(): void {
        console.log('Drone is on')
    }

    off(): void {
        console.log('Drone is off')
    }

    moveLeft(): void {
        console.log('Drone moved to the left')
    }

    moveRight(): void {
        console.log('Drone moved to the right')
    }

    moveUp(): void {
        console.log('Drone moved up')
    }
    
    moveDown(): void {
        console.log('Drone moved down')
    }
}