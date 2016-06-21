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
//# sourceMappingURL=generic.js.map