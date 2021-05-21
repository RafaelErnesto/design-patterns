"use strict";
exports.__esModule = true;
exports.PrintText = void 0;
var PrintText = /** @class */ (function () {
    function PrintText() {
    }
    PrintText.prototype.print = function (person) {
        console.log("Name: " + person.name + ", Age: " + person.age + ", Email: " + person.email + ".");
    };
    return PrintText;
}());
exports.PrintText = PrintText;
