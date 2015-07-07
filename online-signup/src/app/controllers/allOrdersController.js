(function() {

    var AllOrdersController = function($scope, customersFactory) {

        // best practice - define all vars
        $scope.orders = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType;

        // private internal function for searching
        function init () {


            customersFactory.getOrders()
                .success(function(orders) {
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function(data, status, headers, config){
                    // handle error
                });
        }

        function getOrdersTotal() {
            var total = 0;
            for (var i = 0; i < $scope.orders.length; i++) {
                total += $scope.orders[i].total;

            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    }
    AllOrdersController.$inject = ['$scope', 'customersFactory'];
    angular.module('customersApp')
        .controller('AllOrdersController', AllOrdersController);
}());
