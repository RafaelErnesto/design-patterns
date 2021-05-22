"use strict";
exports.__esModule = true;
exports.SpanishHandler = void 0;
var SpanishHandler = /** @class */ (function () {
    function SpanishHandler() {
        this.words = {
            ball: 'bola',
            house: 'casa',
            dog: 'perro'
        };
    }
    SpanishHandler.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    SpanishHandler.prototype.translate = function (request) {
        if (request.translateTo === 'spanish') {
            console.log(this.words[request.word]);
        }
        else {
            this.nextHandler.translate(request);
        }
    };
    return SpanishHandler;
}());
exports.SpanishHandler = SpanishHandler;
