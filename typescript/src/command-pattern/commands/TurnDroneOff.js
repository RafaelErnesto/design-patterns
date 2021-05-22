"use strict";
exports.__esModule = true;
exports.TurnDroneOff = void 0;
var TurnDroneOff = /** @class */ (function () {
    function TurnDroneOff(robot) {
        this.robot = robot;
    }
    TurnDroneOff.prototype.execute = function () {
        this.robot.off();
    };
    return TurnDroneOff;
}());
exports.TurnDroneOff = TurnDroneOff;
