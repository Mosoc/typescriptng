/// <reference path="../app/crud.ts" />


app.controller('listctrl', ['empservice', function (empservice) {
    var self = this;
    self.emps = [];
    self.emps = empservice.query();
}]);

app.controller('detailctrl', ['empservice', '$routeParams'
    , function (empservice
        , $routeParams) {
        var self = this;
        var emp = new Api.Employee();
        emp = empservice.get({ no: $routeParams.no });
        self.emp = emp;
    }]);

app.controller('editctrl', ['empservice', '$routeParams', '$window'
    , function (empservice
        , $routeParams
        , $window: ng.IWindowService) {
        var self = this;
        var emp = new Api.Employee();
        emp = empservice.get({ no: $routeParams.no });
        self.emp = emp;

        self.update = function () {
            empservice.update({ no: $routeParams.no }, self.emp, function () {
                $window.location.href = '#/';
            });
        }
    }]);