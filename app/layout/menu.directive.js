'use strict';
angular
    .module('app')
    .directive('menuDir', [ '$document', '$window','menuService',menuDir]);

function menuDir($document,$window,menuService){
    return{
        restrict: 'E',
        templateUrl:'app/layout/menu.html',
        replace:true,
        link: function(scope, el, attr) {
            menuService.getMenuData().then(function (data) {
                    scope.menulist=data;
                },
                function (data) {
                    console.log(data);
                });
            scope.menuChange=function(str){
                menuService.changeMenuData(str).then(function (data) {
                        scope.menulist=data;
                    },
                    function (data) {
                        console.log(data);
                    });
            }
            angular.element('#accordion').on('shown.bs.collapse', function () {
                //angular.element('#accordion>li>ul.in').parent().find("a>span").eq(1).addClass("ani");
                angular.element('#accordion>li>ul.in').parent().find("a>span").eq(1).removeClass("glyphicon-chevron-left").addClass("glyphicon-chevron-down");
            });
            angular.element('#accordion').on('hide.bs.collapse', function () {
                //angular.element('#accordion>li ').find('a>span.right').removeClass("ani");
                angular.element('#accordion>li').find('a>span.right').removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-left");
            });
        }
    }
}
