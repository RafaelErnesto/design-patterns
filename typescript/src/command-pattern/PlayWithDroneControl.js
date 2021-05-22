"use strict";
exports.__esModule = true;
var Button_1 = require("./button/Button");
var index_1 = require("./commands/index");
var DroneControl_1 = require("./controls/DroneControl");
var PlayWithDroneControl = /** @class */ (function () {
    function PlayWithDroneControl() {
    }
    PlayWithDroneControl.prototype.turnDroneOn = function () {
        var drone = DroneControl_1.DroneControl.getDroneControl();
        var turnOn = new index_1.TurnDroneOn(drone);
        var onButtonPressed = new Button_1.Button(turnOn);
        onButtonPressed.press();
    };
    PlayWithDroneControl.prototype.turnDroneOff = function () {
        var drone = DroneControl_1.DroneControl.getDroneControl();
        var turnOff = new index_1.TurnDroneOff(drone);
        var onButtonPressed = new Button_1.Button(turnOff);
        onButtonPressed.press();
    };
    PlayWithDroneControl.prototype.moveDroneLeft = function () {
        var drone = DroneControl_1.DroneControl.getDroneControl();
        var move = new index_1.MoveDroneLeft(drone);
        var onButtonPressed = new Button_1.Button(move);
        onButtonPressed.press();
    };
    PlayWithDroneControl.prototype.moveDroneRight = function () {
        var drone = DroneControl_1.DroneControl.getDroneControl();
        var move = new index_1.MoveDroneRight(drone);
        var onButtonPressed = new Button_1.Button(move);
        onButtonPressed.press();
    };
    return PlayWithDroneControl;
}());
(function () {
    var playWithDrone = new PlayWithDroneControl();
    playWithDrone.turnDroneOn();
    playWithDrone.moveDroneLeft();
    playWithDrone.moveDroneRight();
    playWithDrone.turnDroneOff();
})();
