// CustomersController.js
// Author: Mili Wijeratne

(function() {

    var CustomersController = function($scope, $log, customersFactory, appSettings) {
        // Defaults
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {

            // log
            console.info('from customersController.js');
            // synchronous call
            // $scope.customers = customersFactory.getCustomers();

            //Async call with promise
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    // handle error
                    $log.log('Server Error! ' + data.error + ' ' + status);
                    // console.error('Server Error! ' + data.error + ' ' + status);

                });
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        // Delete customer
        $scope.deleteCustomer = function(customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function(status) {
                    if (status) {
                        for (var j = 0; j < $scope.customers.length; j++) {
                            if ($scope.customers[j].id === customerId) {

                                $scope.customers.splice(j, 1);
                                break;
                            }
                        }
                    } else {
                        $window.alert('Unable to delete customer');
                    }
                })
                .error(function(data, status, headers, config) {
                    // handle error
                    $log.log('Server Error! ' + data.error + ' ' + status);
                    // console.error('Server Error! ' + data.error + ' ' + status);

                });

        }

    }
    CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];
    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());
