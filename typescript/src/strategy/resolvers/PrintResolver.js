"use strict";
exports.__esModule = true;
var PrintJson_1 = require("../printers/PrintJson");
var PrintTable_1 = require("../printers/PrintTable");
var PrintText_1 = require("../printers/PrintText");
var PrintResolver = /** @class */ (function () {
    function PrintResolver() {
        this.printers = {
            text: new PrintText_1.PrintText(),
            json: new PrintJson_1.PrintJson(),
            table: new PrintTable_1.PrintTable()
        };
    }
    PrintResolver.prototype.resolve = function (word) {
        return this.printers[word];
    };
    return PrintResolver;
}());
var printResolver = new PrintResolver();
exports["default"] = printResolver;
