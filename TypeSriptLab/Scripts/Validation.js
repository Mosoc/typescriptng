var Validation;
(function (Validation) {
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            var valRegexp = /^[A-Za-z]+$/;
            return valRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var NumOnlyValidator = (function () {
        function NumOnlyValidator() {
        }
        NumOnlyValidator.prototype.isAcceptable = function (s) {
            var valRegexp = /^[0-9]+$/;
            return valRegexp.test(s);
        };
        return NumOnlyValidator;
    }());
    Validation.NumOnlyValidator = NumOnlyValidator;
})(Validation || (Validation = {}));
var str = 'Ian';
var strvalid = new Validation.LettersOnlyValidator();
console.log(strvalid.isAcceptable(str));
var strvalid2 = new Validation.NumOnlyValidator();
console.log(strvalid2.isAcceptable(str));
//# sourceMappingURL=Validation.js.map