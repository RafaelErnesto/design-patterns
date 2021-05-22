"use strict";
exports.__esModule = true;
exports.PortugueseHandler = void 0;
var PortugueseHandler = /** @class */ (function () {
    function PortugueseHandler() {
        this.words = {
            ball: 'bola',
            house: 'casa',
            dog: 'cachorro'
        };
    }
    PortugueseHandler.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    PortugueseHandler.prototype.translate = function (request) {
        if (request.translateTo === 'portuguese') {
            console.log(this.words[request.word]);
        }
        else {
            this.nextHandler.translate(request);
        }
    };
    return PortugueseHandler;
}());
exports.PortugueseHandler = PortugueseHandler;
