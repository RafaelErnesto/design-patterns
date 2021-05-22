import { TranslationRequest } from "../../customTypes/TranslationRequest";
import { TranslatorHandleInterface } from "../contracts/TranslatorHandleInterface";

export class FrenchHandler implements TranslatorHandleInterface {

    words: any
    nextHandler: TranslatorHandleInterface

    constructor() {
        this.words = {
            ball: 'la balle',
            house: 'la maison',
            dog: 'le chien'
        }
    }

    setNextHandler(nextHandler: TranslatorHandleInterface): void {
        this.nextHandler = nextHandler
    }

    translate(request: TranslationRequest): void {
        if(request.translateTo === 'french') {
            console.log(this.words[request.word])
        } else {
            this.nextHandler.translate(request)
        }
    }
}