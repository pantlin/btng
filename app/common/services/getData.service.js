
angular.module('app').service('getDataService',['$http','$q',getDataService]);

function getDataService($http,$q) {
    var _url = '';
    this.setUrl = function (url) {
        _url = url;
    }
    this.getUrl = function () {
        return _url;
    }
    this.getData = function () {
        var largeLoad = $q.defer();
        $http.get(_url)
            .success(function (data) {
                largeLoad.resolve(data);
            })
            .error(function () {
                largeLoad.reject('no data');
            });
        return largeLoad.promise;
    }
}