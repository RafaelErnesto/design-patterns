"use strict";
exports.__esModule = true;
exports.FrenchHandler = void 0;
var FrenchHandler = /** @class */ (function () {
    function FrenchHandler() {
        this.words = {
            ball: 'la balle',
            house: 'la maison',
            dog: 'le chien'
        };
    }
    FrenchHandler.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    FrenchHandler.prototype.translate = function (request) {
        if (request.translateTo === 'french') {
            console.log(this.words[request.word]);
        }
        else {
            this.nextHandler.translate(request);
        }
    };
    return FrenchHandler;
}());
exports.FrenchHandler = FrenchHandler;
