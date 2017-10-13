angular
    .module('app')
    .controller('UIGrid',['$scope', '$http', 'i18nService', '$interval','UIGridService',UIGrid]);

function UIGrid ($scope, $http, i18nService, $interval,UIGridService) {
    i18nService.setCurrentLang('zh-cn');
    UIGridService.setUrl('data/largeLoad.json');
    UIGridService.getData().then(
        function(data){
            $scope.gridOptions.data = data;
            $scope.gridOptions2.data = data;
        },
        function(data){
            console.log(data);
        }
    );
    $scope.gridOptions = {
        paginationPageSizes: [10, 25, 50, 75],
        paginationPageSize: 10
    };
    $scope.gridOptions2 = {
        enablePaginationControls: false,
        paginationPageSize: 10,
        enableRowSelection: true,
        enableRowHeaderSelection: false
    };
    $scope.gridOptions2.multiSelect = false;//多选
    $scope.gridOptions2.modifierKeysToMultiSelect = false;
    $scope.gridOptions2.noUnselect = true;
    $scope.gridOptions2.onRegisterApi = function (gridApi) {
        $scope.gridApi2 = gridApi;
    }


}