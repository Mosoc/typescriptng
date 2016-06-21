/// <reference path="Validation2.ts" />
namespace Validation2 {
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            var valRegexp: RegExp = /^[A-Za-z]+$/;
            return valRegexp.test(s);
        }
    }
}