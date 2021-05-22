import { TranslationRequest } from "../customTypes/TranslationRequest";
import { TranslatorHandleInterface } from "./contracts/TranslatorHandleInterface";
import { FrenchHandler } from "./handlers/FrenchHandler";
import { PortugueseHandler } from "./handlers/PortugueseHandler";
import { SpanishHandler } from "./handlers/SpanishHandler";

class Translator {
    chain: TranslatorHandleInterface

    constructor() {
        const portuguese = new PortugueseHandler()
        const french = new FrenchHandler()
        const spanish = new SpanishHandler()
        portuguese.setNextHandler(spanish)
        spanish.setNextHandler(french)

        this.chain = portuguese
    }

    translate(request: TranslationRequest): void {
        this.chain.translate(request)
    }
}

(() => {
    const translator = new Translator()
    translator.translate({
        translateTo: 'portuguese',
        word: 'dog'
    })
    translator.translate({
        translateTo: 'spanish',
        word: 'dog'
    })
    translator.translate({
        translateTo: 'french',
        word: 'dog'
    })
})()