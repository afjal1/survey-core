import { QuestionNonValue } from "./questionnonvalue";
import { LocalizableString } from "./localizablestring";
/**
  * A class that describes the HTML question type. Unlike other question types, HTML cannot have a title or value.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/questiontype-html/ (linkStyle))
 */
export declare class QuestionHtmlModel extends QuestionNonValue {
    ignoreHtmlProgressing: boolean;
    constructor(name: string);
    getType(): string;
    readonly isCompositeQuestion: boolean;
    getProcessedText(text: string): string;
    /*
    * HTML markup to display.
    *
    * > IMPORTANT: If you get the markup from a third party, ensure that it does not contain malicious code.
    */
    html: string;
    readonly locHtml: LocalizableString;
    readonly processedHtml: string;
    private processHtml;
    readonly isNewA11yStructure: boolean;
    readonly renderCssRoot: string;
}
