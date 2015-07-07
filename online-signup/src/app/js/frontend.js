// Online Signup
// Author: Mili Wijeratne

(function() {

    // var onlineSignup = angular.module('customersApp', ['ngRoute', 'ngAnimate']);
    var onlineSignup = angular.module('amnet.onlineSignup', ['ngRoute', 'ngSanitize']);

    console.info('app started!');
    // directive
    onlineSignup.directive ('helloWorld', function() {
        // DDO - A Directive Definition Object
        return {
            template: 'Hello World'
        };
    });

    onlineSignup.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: 'assets/views/main.html'
            })
            // .when('/orders/:customerId', {
            //     controller: 'OrdersController',
            //     templateUrl: 'assets/views/orders.html'
            // })
            // .when('/orders', {
            //     controller: 'AllOrdersController',
            //     templateUrl: 'assets/views/allorders.html'
            // })
            .otherwise ({ redirectTo: '/' });
    });

}());




