"use strict";
exports.__esModule = true;
exports.MoveDroneLeft = void 0;
var MoveDroneLeft = /** @class */ (function () {
    function MoveDroneLeft(robot) {
        this.robot = robot;
    }
    MoveDroneLeft.prototype.execute = function () {
        this.robot.moveLeft();
    };
    return MoveDroneLeft;
}());
exports.MoveDroneLeft = MoveDroneLeft;
