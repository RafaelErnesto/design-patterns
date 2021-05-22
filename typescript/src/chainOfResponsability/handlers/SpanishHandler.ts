import { TranslationRequest } from "../../customTypes/TranslationRequest";
import { TranslatorHandleInterface } from "../contracts/TranslatorHandleInterface";

export class SpanishHandler implements TranslatorHandleInterface {

    words: any
    nextHandler: TranslatorHandleInterface

    constructor() {
        this.words = {
            ball: 'bola',
            house: 'casa',
            dog: 'perro'
        }
    }

    setNextHandler(nextHandler: TranslatorHandleInterface): void {
        this.nextHandler = nextHandler
    }

    translate(request: TranslationRequest): void {
        if(request.translateTo === 'spanish') {
            console.log(this.words[request.word])
        } else {
            this.nextHandler.translate(request)
        }
    }
}