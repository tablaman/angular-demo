// CustomersController.js
// Author: Mili Wijeratne

// Option 1
// app.controller('CustomersController', function($scope) {
//     // Defaults
//     $scope.sortBy = 'name';
//     $scope.reverse = false;

//     $scope.customers = [{
//         joined: '2012-12-1',
//         name: 'mark',
//         city: 'Kansas',
//         orderTotal: 29.111
//     }, {
//         joined: '2012-12-1',
//         name: 'Mika',
//         city: 'Colombo',
//         orderTotal: 90.777888999
//     }, {
//         joined: '2012-12-1',
//         name: 'Brittany',
//         city: 'Hawthorn',
//         orderTotal: 9.9934
//     }, {
//         joined: '2012-12-1',
//         name: 'Shelly',
//         city: 'Kandy',
//         orderTotal: 7.88777
//     }, {
//         joined: '2012-12-1',
//         name: 'Druf',
//         city: 'Kansas',
//         orderTotal: 19.9934
//     }];

//     $scope.doSort = function(propName) {
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse;
//     };
// });


// Option 2 - enclose in anonymous function
// (function() {
//     angular.module('customersApp')
//         .controller('CustomersController', function($scope) {
//             // Defaults
//             $scope.sortBy = 'name';
//             $scope.reverse = false;

//             $scope.customers = [{
//                 joined: '2012-12-1',
//                 name: 'mark',
//                 city: 'Kansas',
//                 orderTotal: 29.111
//             }, {
//                 joined: '2012-12-1',
//                 name: 'Mika',
//                 city: 'Colombo',
//                 orderTotal: 90.777888999
//             }, {
//                 joined: '2012-12-1',
//                 name: 'Brittany',
//                 city: 'Hawthorn',
//                 orderTotal: 9.9934
//             }, {
//                 joined: '2012-12-1',
//                 name: 'Shelly',
//                 city: 'Kandy',
//                 orderTotal: 7.88777
//             }, {
//                 joined: '2012-12-1',
//                 name: 'Druf',
//                 city: 'Kansas',
//                 orderTotal: 19.9934
//             }];

//             $scope.doSort = function(propName) {
//                 $scope.sortBy = propName;
//                 $scope.reverse = !$scope.reverse;
//             };
//         });
// }());


// Option 3 - PREFERRED
// take the controller nesting away from the angular def, and keep it separate - preffered
// Advantage: when working on bigger functions, it's easier to get things wrong if you're not careful
// therefore by keeping the funciton separate, you get to purely focus on it.

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
