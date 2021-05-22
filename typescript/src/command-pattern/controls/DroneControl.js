"use strict";
exports.__esModule = true;
exports.DroneControl = void 0;
var Drone_1 = require("../robots/Drone");
var DroneControl = /** @class */ (function () {
    function DroneControl() {
    }
    DroneControl.getDroneControl = function () {
        return new Drone_1.Drone();
    };
    return DroneControl;
}());
exports.DroneControl = DroneControl;
