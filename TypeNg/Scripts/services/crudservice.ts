/// <reference path="../app/crud.ts" />

app.factory('empservice', ['$resource', function ($resource) {
    var url = 'http://myngwebapi.azurewebsites.net/api';
    var result = $resource(url + '/employee/:no', { no: '@no' }
        , {
            update: {
                method: 'PUT'
            }
        });
    return result;
}]);
