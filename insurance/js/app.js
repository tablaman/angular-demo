'use strict';

/* App Module */
var insuranceCoApp = angular.module('insuranceCoApp', [
    'ngRoute',
    'insuranceCoAppControllers'
]);


insuranceCoApp.config (['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/option-A', {
                templateUrl: 'partials/option-a.html',
                controller: 'optionACtrl'
            }).
            when('/option-B', {
                templateUrl: 'partials/option-b.html',
                controller: 'optionBCtrl'
            }).
            when('/option-A-summary', {
                templateUrl: 'partials/option-A-summary.html',
                controller: 'optionASummaryCtrl'
            }).
            when('/option-B-summary', {
                templateUrl: 'partials/option-B-summary.html',
                controller: 'optionBSummaryCtrl'
            }).
            when('/landing', {
                templateUrl: 'partials/landing.html'
            }).
            otherwise ({
                redirectTo: '/landing'
        });
    }


])