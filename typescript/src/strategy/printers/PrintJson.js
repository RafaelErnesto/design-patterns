"use strict";
exports.__esModule = true;
exports.PrintJson = void 0;
var PrintJson = /** @class */ (function () {
    function PrintJson() {
    }
    PrintJson.prototype.print = function (person) {
        console.log(JSON.stringify(person));
    };
    return PrintJson;
}());
exports.PrintJson = PrintJson;
