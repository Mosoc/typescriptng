/// <reference path="Validation2.ts" />
var Validation2;
(function (Validation2) {
    var NumOnlyValidator = (function () {
        function NumOnlyValidator() {
        }
        NumOnlyValidator.prototype.isAcceptable = function (s) {
            var valRegexp = /^[0-9]+$/;
            return valRegexp.test(s);
        };
        return NumOnlyValidator;
    }());
    Validation2.NumOnlyValidator = NumOnlyValidator;
})(Validation2 || (Validation2 = {}));
//# sourceMappingURL=NumOnlyValidator.js.map