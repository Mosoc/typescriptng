// 如需空白範本的簡介，請參閱下列文件: 
// http://go.microsoft.com/fwlink/?LinkID=397705
// 若要針對在 Ripple 或 Android 裝置/模擬器上載入的頁面，偵錯程式碼: 請啟動您的應用程式，設定中斷點，
// 然後在 JavaScript 主控台中執行 "window.location.reload()"。
var ngcordova;
(function (ngcordova) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // 處理 Cordova 暫停與繼續事件
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova 已載入。請在這裡執行任何需要 Cordova 的初始化作業。
        }
        function onPause() {
            // TODO: 這個應用程式已暫停。請在這裡儲存應用程式狀態。
        }
        function onResume() {
            // TODO: 這個應用程式已重新啟動。請在這裡還原應用程式狀態。
        }
    })(Application = ngcordova.Application || (ngcordova.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(ngcordova || (ngcordova = {}));
/// <reference path="typings/angularjs/angular.d.ts" />
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
var Geo = (function () {
    function Geo() {
    }
    return Geo;
}());
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
                geo.Latitude = position.coords.latitude;
                geo.Long = position.coords.longitude;
                self.geo = geo;
                console.log(self.geo);
            }, function (err) {
                console.log(err);
            });
        };
    }]);
//# sourceMappingURL=appBundle.js.map