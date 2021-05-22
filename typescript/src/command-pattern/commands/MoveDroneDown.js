"use strict";
exports.__esModule = true;
exports.MoveDroneDown = void 0;
var MoveDroneDown = /** @class */ (function () {
    function MoveDroneDown(robot) {
        this.robot = robot;
    }
    MoveDroneDown.prototype.execute = function () {
        this.robot.moveDown();
    };
    return MoveDroneDown;
}());
exports.MoveDroneDown = MoveDroneDown;
