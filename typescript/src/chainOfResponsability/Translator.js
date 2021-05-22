"use strict";
exports.__esModule = true;
var FrenchHandler_1 = require("./handlers/FrenchHandler");
var PortugueseHandler_1 = require("./handlers/PortugueseHandler");
var SpanishHandler_1 = require("./handlers/SpanishHandler");
var Translator = /** @class */ (function () {
    function Translator() {
        var portuguese = new PortugueseHandler_1.PortugueseHandler();
        var french = new FrenchHandler_1.FrenchHandler();
        var spanish = new SpanishHandler_1.SpanishHandler();
        portuguese.setNextHandler(spanish);
        spanish.setNextHandler(french);
        this.chain = portuguese;
    }
    Translator.prototype.translate = function (request) {
        this.chain.translate(request);
    };
    return Translator;
}());
(function () {
    var translator = new Translator();
    translator.translate({
        translateTo: 'portuguese',
        word: 'dog'
    });
    translator.translate({
        translateTo: 'spanish',
        word: 'dog'
    });
    translator.translate({
        translateTo: 'french',
        word: 'dog'
    });
})();
