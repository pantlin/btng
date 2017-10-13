'use strict';
angular
    .module('app').service('menuService',['$http','$q',menuService]);

function menuService($http,$q){

    this.getMenuData=function () {
        var menu=$q.defer();
        $http.get('data/menu.json?type="123"').success(function(data)
        {
            menu.resolve(data.menu);

        }).error(function (data) {
            menu.reject(data);
        });
        return menu.promise;
    }
    this.changeMenuData=function(type){
        var menu=$q.defer();
        $http.get('data/menu'+type+'.json?type="123"').success(function(data)
        {
            menu.resolve(data.menu);

        }).error(function (data) {
            menu.reject(data);
        });
        return menu.promise;
    }
}