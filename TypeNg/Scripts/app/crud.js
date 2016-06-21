/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
var app = angular.module('myapp', ['ngRoute', 'ngResource']);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'query.html',
            controller: 'listctrl as ctrl'
        }).when('/view/:no', {
            templateUrl: 'view.html',
            controller: 'detailctrl as empctrl'
        }).when('/edit/:no', {
            templateUrl: 'edit.html',
            controller: 'editctrl as empeditctrl'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
//# sourceMappingURL=crud.js.map