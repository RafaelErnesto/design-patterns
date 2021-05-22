import { TranslationRequest } from "../../customTypes/TranslationRequest";

export interface TranslatorHandleInterface {
    setNextHandler(nextHandler: TranslatorHandleInterface): void
    translate(request: TranslationRequest): void
}