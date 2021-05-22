"use strict";
exports.__esModule = true;
exports.TurnDroneOn = void 0;
var TurnDroneOn = /** @class */ (function () {
    function TurnDroneOn(robot) {
        this.robot = robot;
    }
    TurnDroneOn.prototype.execute = function () {
        this.robot.on();
    };
    return TurnDroneOn;
}());
exports.TurnDroneOn = TurnDroneOn;
