'use strict';

angular
    .module('app')
    .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: true,
            events: true,
            modules: [{
                name: 'Tree',
                files: ['lib/extend/angular-bootstrap-nav-tree/abn_tree_directive.js',
                    'lib/extend/angular-bootstrap-nav-tree/abn_tree.css'
                ]
            }
            ]
        });
    }]);