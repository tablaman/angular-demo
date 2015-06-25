(function() {

    var OrdersController = function($scope, $routeParams, customersFactory) {

        // best practice - define all vars
        var customerId = $routeParams.customerId; // comes from angular module where we've deifned customerId. ie .when('/orders/:customerId')
        $scope.orders = null;
        $scope.customer = null;

        // log
        // console.info('OrdersController loaded');

        // private internal function for searching
        function init () {
            // Search the customers for the customerId and obtain the order(s) relevant to that id
            // $scope.customer = customersFactory.getCustomer(customerId);

            customersFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config){
                    // handle error
                });
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    }
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];
    angular.module('customersApp')
        .controller('OrdersController', OrdersController);
}());
