angular
    .module('app')
    .controller('TabsDemoCtrl',TabsDemoCtrl);

function TabsDemoCtrl($scope, $window) {
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
        console.log(12323);
        setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };

    $scope.model = {
        name: 'Tabs'
    };
    $scope.toTabs=function(i){
        $scope.activeTab=i;
    };

}