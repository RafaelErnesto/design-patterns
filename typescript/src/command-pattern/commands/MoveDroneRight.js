"use strict";
exports.__esModule = true;
exports.MoveDroneRight = void 0;
var MoveDroneRight = /** @class */ (function () {
    function MoveDroneRight(robot) {
        this.robot = robot;
    }
    MoveDroneRight.prototype.execute = function () {
        this.robot.moveRight();
    };
    return MoveDroneRight;
}());
exports.MoveDroneRight = MoveDroneRight;
