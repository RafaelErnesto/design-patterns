import { Button } from "./button/Button";
import { TurnDroneOn, TurnDroneOff, MoveDroneDown, MoveDroneLeft, MoveDroneRight, MoveDroneUp } from "./commands/index";
import { DroneControl } from "./controls/DroneControl";

class PlayWithDroneControl {

   turnDroneOn() {
        const drone = DroneControl.getDroneControl()
        const turnOn = new TurnDroneOn(drone)
        const onButtonPressed = new Button(turnOn)
        onButtonPressed.press()
   }

   turnDroneOff() {
        const drone = DroneControl.getDroneControl()
        const turnOff = new TurnDroneOff(drone)
        const onButtonPressed = new Button(turnOff)
        onButtonPressed.press()
    }  
    moveDroneLeft() {
        const drone = DroneControl.getDroneControl()
        const move = new MoveDroneLeft(drone)
        const onButtonPressed = new Button(move)
        onButtonPressed.press()
    }  
    moveDroneRight() {
        const drone = DroneControl.getDroneControl()
        const move = new MoveDroneRight(drone)
        const onButtonPressed = new Button(move)
        onButtonPressed.press()
    }   
}

(() => {
    const playWithDrone = new PlayWithDroneControl()
    playWithDrone.turnDroneOn()
    playWithDrone.moveDroneLeft()
    playWithDrone.moveDroneRight()
    playWithDrone.turnDroneOff()

})()