import { TranslationRequest } from "../../customTypes/TranslationRequest";

export interface TranslatorHandleInterface {
    translate(request: TranslationRequest): void
}