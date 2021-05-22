"use strict";
exports.__esModule = true;
exports.Button = void 0;
var Button = /** @class */ (function () {
    function Button(command) {
        this.command = command;
    }
    Button.prototype.press = function () {
        this.command.execute();
    };
    return Button;
}());
exports.Button = Button;
