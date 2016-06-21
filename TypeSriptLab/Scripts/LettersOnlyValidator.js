/// <reference path="Validation2.ts" />
var Validation2;
(function (Validation2) {
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            var valRegexp = /^[A-Za-z]+$/;
            return valRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation2.LettersOnlyValidator = LettersOnlyValidator;
})(Validation2 || (Validation2 = {}));
//# sourceMappingURL=LettersOnlyValidator.js.map