var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
//var jsonObject = { "no": "0001", "name": "ian" };
//var x = (<Employee>this.jsonObject);
//alert(x.no);
//var jsonstr = '{"no":"0001","name":"ian"}';
//var x= <Employee>JSON.parse(jsonstr);
//alert(x.no);
var jsonObjects = [
    { "no": "001", "name": "ian" },
    { "no": "002", "name": "andy" },
    { "no": "003", "name": "steve" }
];
for (var _i = 0, jsonObjects_1 = jsonObjects; _i < jsonObjects_1.length; _i++) {
    var item = jsonObjects_1[_i];
    var x = item;
    console.log(x.no);
}
//# sourceMappingURL=jsonobject.js.map