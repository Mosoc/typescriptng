/// <reference path="Validation2.ts" />
namespace Validation2 {
    export class NumOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            var valRegexp: RegExp = /^[0-9]+$/;
            return valRegexp.test(s);
        }
    }
}