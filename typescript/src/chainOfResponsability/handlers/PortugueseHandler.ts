import { TranslationRequest } from "../../customTypes/TranslationRequest";
import { TranslatorHandleInterface } from "../contracts/TranslatorHandleInterface";

export class PortugueseHandler implements TranslatorHandleInterface {

    words: any
    nextHandler: TranslatorHandleInterface

    constructor() {
        this.words = {
            ball: 'bola',
            house: 'casa',
            dog: 'cachorro'
        }
    }

    setNextHandler(nextHandler: TranslatorHandleInterface): void {
        this.nextHandler = nextHandler
    }

    translate(request: TranslationRequest): void {
        if(request.translateTo === 'portuguese') {
            console.log(this.words[request.word])
        } else {
            this.nextHandler.translate(request)
        }
    }
}