"use strict";
exports.__esModule = true;
exports.Drone = void 0;
var Drone = /** @class */ (function () {
    function Drone() {
    }
    Drone.prototype.on = function () {
        console.log('Drone is on');
    };
    Drone.prototype.off = function () {
        console.log('Drone is off');
    };
    Drone.prototype.moveLeft = function () {
        console.log('Drone moved to the left');
    };
    Drone.prototype.moveRight = function () {
        console.log('Drone moved to the right');
    };
    Drone.prototype.moveUp = function () {
        console.log('Drone moved up');
    };
    Drone.prototype.moveDown = function () {
        console.log('Drone moved down');
    };
    return Drone;
}());
exports.Drone = Drone;
