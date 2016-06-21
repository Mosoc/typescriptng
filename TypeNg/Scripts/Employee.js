var Employee = (function () {
    function Employee() {
    }
    /** 取得員編姓名 */
    Employee.prototype.GetNoName = function () {
        return this.No + " - " + this.Name;
    };
    return Employee;
}());
//# sourceMappingURL=Employee.js.map