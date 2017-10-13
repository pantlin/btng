angular
    .module('app')
    .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];//注入

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $urlRouterProvider.when("", "/main");
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/layout/defaultMain.html'
        })
        .state('price', {
            url: '/price',
            templateUrl: 'app/price/price.html'
        })
        .state('table', {
            url: '/table',
            templateUrl: 'app/table/table.html',
            controller: 'tableCtrl',
            resolve: {
                loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/table/table.ctrl.js');
                }]
            }
        })
        .state('tableDatatable', {
            url: '/datatable',
            templateUrl: 'app/datatable/datatable.html'
        })
        .state('UIGrid', {
            url: '/table-grid',
            templateUrl: 'app/UIGrid/UIGrid.html',
            controller: 'UIGrid',
            resolve:{
                loadCtrl:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        'app/UIGrid/UIGrid.service.js',
                        'app/UIGrid/UIGrid.ctrl.js'
                    ]);
                }]
            }

        })
        .state('formValidation', {
            url: '/formValidation',
            templateUrl: 'app/form/formValidation.html',
            controller: 'formValidation',
            resolve:{
                loadCtrl:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load('app/form/formValidation.ctrl.js');
                }]
            }

        })
        .state('formValidation2', {
            url: '/formValidation2',
            templateUrl: 'app/form/formValidation2.html',
            resolve: {
                loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/form/formValidation2.ctrl.js');
                }]
            }

        })
        .state('formElements', {
            url: '/formElements',
            templateUrl: 'app/form/formElements.html'
        })
        .state('formTabWizard', {
            url: '/formTabWizard',
            templateUrl: 'app/form/formTabWizard.html',
            resolve: {
                loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/form/formTabWizard.ctrl.js');
                }]
            }

        })
        .state('buttons', {
            url: '/buttons',
            templateUrl: 'app/buttons/buttons.html',
            resolve: {
                loadDirective: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/buttons/buttons.directive.js');
                }]
            }
        })
        .state('icons', {
            url: '/icons',
            templateUrl: 'app/icons/icons.html'
        })
        .state('bootstrap', {
            url: '/bootstrap',
            templateUrl: 'app/uiBootstrap/uiBootstrap.html',
            resolve: {
                loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/uiBootstrap/uiBootstrap.ctrl.js');
                }]
            }
        })
        .state('charts', {
            url: '/charts',
            templateUrl: 'app/charts/charts.html',
            resolve: {
                // loadChartsCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                //     return $ocLazyLoad.load('app/charts/charts.ctrl.js');
                // }]
            }
        })
        .state('tree', {
            url: '/tree',
            templateUrl: 'app/tree/tree.html',
            resolve: {
                loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('Tree').then(function () {
                        return $ocLazyLoad.load([
                            'app/tree/tree.service.js',
                            'app/tree/tree.ctrl.js'
                        ]);
                    });
                }]
            }
        })
        .state('invoice', {
            url: '/invoice',
            templateUrl: 'app/page/invoice.html'
        })
        .state('pageBacis', {
            url: '/page_bacis',
            templateUrl: 'app/page/pageBacis.html'
        })

        .state('nav',{
            url:'/nav/:menu',
            template: 'menu is {{menu}}',
            controller:function($scope,$stateParams){
                $scope.menu=$stateParams.menu;
             }
        })
        .state('appointmentRegister',{
            url:'/appointmentRegister',
            templateUrl: 'app/appointmentRegister/appointmentRegister.html'
        })
        .state('hospital',{
            url:'/hospital',
            templateUrl: 'app/appointmentRegister/hospital.html'
        })
        .state('departmentDoctor',{
            url:'/departmentDoctor',
            templateUrl: 'app/appointmentRegister/departmentDoctor.html'
        })
        .state('doctor',{
            url:'/doctor',
            templateUrl: 'app/appointmentRegister/doctor.html'
        })
        .state('allDoctor',{
            url:'/allDoctor',
            templateUrl: 'app/appointmentRegister/allDoctor.html'
        })
        .state('allDepartmentDoctor',{
            url:'/allDepartmentDoctor',
            templateUrl: 'app/appointmentRegister/allDepartmentDoctor.html'
        })
    
        .state('test', {
            url: '/state1?id&dd',
            template: '<div class="row"><div class="col-lg-12"><h2><a ui-sref="test({id:123,dd:221})">xxx</a></h2></div></div>'

        });
    // $locationProvider.html5Mode(true);
}