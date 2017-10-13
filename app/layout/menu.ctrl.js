'use strict';
angular
    .module('app').controller('menuCtrl',['$scope','menuService',menuCtrl]);


function menuCtrl($scope,menuService) {
    menuService.getMenuData().then(function (data) {
            $scope.menulist=data;
        },
        function (data) {
            console.log(data);
        });
}