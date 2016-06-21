var bmitype;
(function (bmitype) {
    bmitype[bmitype["nomal"] = 24] = "nomal";
    bmitype[bmitype["light"] = 18.5] = "light";
    bmitype[bmitype["overweight"] = 27] = "overweight";
})(bmitype || (bmitype = {}));
;
function bmi(high, weight) {
    return (weight / (high / 100 * high / 100));
}
function verifybmi(bmi) {
    var result = '';
    if (bmi < bmitype.light) {
        result = '過輕';
    }
    else if (bmi >= bmitype.light && bmi < bmitype.nomal) {
        result = '健康';
    }
    else if (bmi >= bmitype.nomal && bmi < bmitype.overweight) {
        result = '過重!!要小心囉';
    }
    else if (bmi >= bmitype.overweight) {
        result = '肥茲茲，油膩膩';
    }
    return result;
}
function calbmi() {
    var h = document.getElementById('high').value;
    var w = document.getElementById('weight').value;
    var bmiresult = bmi(parseInt(h), parseInt(w));
    alert(bmiresult);
    alert(verifybmi(bmiresult));
}
var Dictionary = (function () {
    function Dictionary() {
    }
    return Dictionary;
}());
var Person = (function () {
    function Person() {
    }
    return Person;
}());
function test() {
    var persons = new Dictionary();
    var ian = new Person();
    ian.name = 'ian';
    ian.age = 18;
    persons[0] = ian;
    var andy = new Person();
    andy.name = 'andy';
    andy.age = 18;
    persons[1] = andy;
    for (var item in persons) {
        console.log(item);
        console.log(persons[item].name);
        console.log(persons[item].age);
    }
}
test();
var Engineer = (function () {
    function Engineer() {
        this.pay = 50000;
    }
    return Engineer;
}());
var Designer = (function () {
    function Designer() {
        this.pay = 45000;
    }
    return Designer;
}());
function CalBonusPay(arg) {
    return arg.pay * 2;
}
console.log(CalBonusPay(new Engineer()));
console.log(CalBonusPay(new Designer()));
alert('Hello TypeScript!!');
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
var jsonObject = { "no": "0001", "name": "ian" };
var x = this.jsonObject;
alert(x.no);
//var jsonstr = '{"no":"0001","name":"ian"}';
//var x= <Employee>JSON.parse(jsonstr);
//alert(x.no);
//var jsonObjects = [
//    { "no": "001", "name": "ian" },
//    { "no": "002", "name": "andy" },
//    { "no": "003", "name": "steve" }
//];
//for (var item of jsonObjects)
//{
//    var x = (<Employee>item);
//    console.log(x.no);
//}
//var jsonObjects = [
//    { "no": "001", "name": "ian" },
//    { "no": "002", "name": "andy" },
//    { "no": "003", "name": "steve" }
//];
//for (var item of jsonObjects)
//{
//    var x = (<Employee>item);
//    console.log(x.no);
//} 
function Add(p1, p2) {
    console.log(p1 + p2);
}
Add(2, 3);
function Strtemplate(p1) {
    console.log("Hi," + p1);
}
Strtemplate('Ian');
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
var str = 'Ian';
var strvalid = new Validation2.LettersOnlyValidator();
console.log(strvalid.isAcceptable(str));
var strvalid2 = new Validation2.NumOnlyValidator();
console.log(strvalid2.isAcceptable(str));
//# sourceMappingURL=lib.js.map