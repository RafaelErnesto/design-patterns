"use strict";
exports.__esModule = true;
exports.MoveDroneUp = void 0;
var MoveDroneUp = /** @class */ (function () {
    function MoveDroneUp(robot) {
        this.robot = robot;
    }
    MoveDroneUp.prototype.execute = function () {
        this.robot.moveUp();
    };
    return MoveDroneUp;
}());
exports.MoveDroneUp = MoveDroneUp;
