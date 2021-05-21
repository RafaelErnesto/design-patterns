"use strict";
exports.__esModule = true;
var PrintResolver_1 = require("./resolvers/PrintResolver");
var Printer = /** @class */ (function () {
    function Printer(resolver) {
        this.resolver = resolver;
    }
    Printer.prototype.print = function (person, type) {
        var printer = this.resolver.resolve(type);
        printer.print(person);
    };
    return Printer;
}());
(function () {
    var printer = new Printer(PrintResolver_1["default"]);
    printer.print({
        name: 'Jhon',
        age: 28,
        email: 'john@mail.com'
    }, 'json');
    printer.print({
        name: 'Jhon',
        age: 28,
        email: 'john@mail.com'
    }, 'table');
    printer.print({
        name: 'Jhon',
        age: 28,
        email: 'john@mail.com'
    }, 'text');
})();
