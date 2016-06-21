namespace Validation {

    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            var valRegexp: RegExp = /^[A-Za-z]+$/;
            return valRegexp.test(s);
        }
    }

    export class NumOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            var valRegexp: RegExp = /^[0-9]+$/;
            return valRegexp.test(s);
        }
    }
}

var str = 'Ian';
var strvalid = new Validation.LettersOnlyValidator();
console.log(strvalid.isAcceptable(str));

var strvalid2 = new Validation.NumOnlyValidator();
console.log(strvalid2.isAcceptable(str));

