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

    var CustomersController = function($scope, customersService, appSettings) {
        // Defaults
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init () {
            $scope.customers = customersService.getCustomers();
            // console.log($scope.customers);
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    }
    CustomersController.$inject = ['$scope', 'customersService', 'appSettings'];
    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());
