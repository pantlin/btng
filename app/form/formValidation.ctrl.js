'use strict';

angular
    .module('app')
    .controller('formValidation',formValidation);

function formValidation($scope) {
    $scope.submitForm = function (isValid) {
        if (!isValid) {
            alert('验证失败');
        }
    };
}