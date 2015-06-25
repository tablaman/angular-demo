// Angular learning

/*********
Key players
Module
Routes

UI
    View
    Directives
    Filters

Logic/Data
    Controller - gets data into UI using $scope
    Factory
    Service

$scope is the glue between UI and Controller/Factory

Modules are just containers: 'tuppaware'
you cna have
- controllers, routes, factories/services/directives/filters

DATA: Factories and Services - SINGLETONS
- used to make RESTful calls
- used to share data between controllers
- used to handle custom logic
- Are singletons
- reusable anywhere

* Modules are containers whereas factories/services are the lego pieces that fit inside.

Controllers: the brain for a view
Directives: teach HTML new tricks!
- little lego blocks put together to do stuff
    - DOM manipulation
    - CSS etc et

    e.g.
    - ng-hide, ng-show
    - ng-repeat
    - ng-view
    - ng-show

    Data binding
    - ng-bind
    - ng-init
    - ng-model

    Modules/Controllers
    ng-app
    ng-controller

    Events
    ng-click
    ng-keypress
    ng-mouseenter

    You can add data- attributes in front of ng-hide - so you have data-ng-hide

    Can also use custom tags: e.g. <customFunc-ng></customFunc-ng>

    Angular uses a data-driven approach instead of controller-driven.

    Other directives
    ng-cloak
    ng-switch
    ng-class
    ng-show

MVC + MVVM = MV*

ng-init: use for rapid prototyping and putting in some data there


FACTORIES AND SERVICES - Singletons: the usage:
- Ajax calls - $http
- business rules
- calculations
- share data (code or state) between controllers
- you can put in constants and value

Method:
- singleton for starters
- can be injected into controllers or other factories.
- can hae their own dependencies.

Exmaples: - these are some of the main ones
$timeout $window, $location, $q - asynch processors
$rootScope, $interval, $filter - for custom filters
$log - general logging purposes.



    */

// Option 1 - define in global scope 
// var app = angular.module ('customersApp', []);

// Option 2 - wrap everything in anonymous functions - keep away from global context.
(function() {

    var app = angular.module('customersApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'assets/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'assets/views/orders.html'
            })
            .otherwise ({ redirectTo: '/' });
    });

}());

//teseting 'this' in GEC
var sth = function() {
    console.log('hello');
}

function sth2() {
    console.log('hello world');
    console.log(this);
    this.sth();
}

// this.sth2();





