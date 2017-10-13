'use strict';

angular
    .module('app')
    .directive('headDir',['$http',headDir])
    .directive('uiFullscreen', [ '$document', '$window',uiFullscreen]);
    
    function headDir($http){
        return{
            templateUrl:'app/layout/head.html',
            link:function (scope, el, attr) {
                $http.get('data/nav.json').success(function(data){
                    scope.nav=data.nav;
                })
                    .error(function (data) {

                });
            }
        }
    }
    function uiFullscreen( $document) {//切换全屏
    return {
        restrict: 'AC',
        template:'<i class="glyphicon glyphicon-fullscreen"></i>',
        link: function(scope, el, attr) {
            el.addClass('hide');
            // disable on ie11
            if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
                el.removeClass('hide');
            }
            el.on('click', function(){
                var target;
                attr.target && ( target = $(attr.target)[0] );
                screenfull.toggle(target);
            });
            $document.on(screenfull.raw.fullscreenchange, function () {
                if(screenfull.isFullscreen){
                    el.addClass('active');
                }else{
                    el.removeClass('active');
                }
            });
        }
    };
}