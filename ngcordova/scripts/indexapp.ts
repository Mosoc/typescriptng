/// <reference path="typings/angularjs/angular.d.ts" />

class Employee {
    No: string;
    Name: string;
}

class Geo {
    Latitude: string;
    Long: string;
}

var app = angular.module("myapp", ['ngCordova'])
    .controller("mainctrl", ['$cordovaGeolocation', function ($cordovaGeolocation) {
        var self = this;
        var empobj = new Employee();
        empobj.No = "1";
        empobj.Name = "Ian";
        self.emp = empobj;

        self.getgeo = function () {
            var posOptions = { timeout: 10000, enableHighAccuracy: false };
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    var geo = new Geo();
                    geo.Latitude = position.coords.latitude
                    geo.Long = position.coords.longitude
                    self.geo = geo;
                    console.log(self.geo);
                }, function (err) {
                    console.log(err);
                });
        }
    }]);
