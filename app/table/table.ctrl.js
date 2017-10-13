'use strict';

angular.module('app').controller('tableCtrl',tableCtrl);
 function tableCtrl($scope, $stateParams) {
    $scope.tableTitle = ['编号', 'titel1', 'title2'];
    $scope.users = [
        {id: 1, fName: 'Hege', lName: "Pege"},
        {id: 2, fName: 'Kim', lName: "Pim"},
        {id: 3, fName: 'Sal', lName: "Smith"},
        {id: 4, fName: 'Jack', lName: "Jones"},
        {id: 5, fName: 'John', lName: "Doe"},
        {id: 6, fName: 'Peter', lName: "Pan"}
    ];
    $scope.title = 'my test title of ngTable';
}