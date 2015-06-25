// CustomersController.js
// Author: Mili Wijeratne

function CustomersController($scope) {
    // Defaults
    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.customers = [{
        joined: '2012-12-1',
        name: 'mark',
        city: 'Kansas',
        orderTotal: 29.111
    }, {
        joined: '2012-12-1',
        name: 'Mika',
        city: 'Colombo',
        orderTotal: 90.777888999
    }, {
        joined: '2012-12-1',
        name: 'Brittany',
        city: 'Hawthorn',
        orderTotal: 9.9934
    }, {
        joined: '2012-12-1',
        name: 'Shelly',
        city: 'Kandy',
        orderTotal: 7.88777
    }, {
        joined: '2012-12-1',
        name: 'Druf',
        city: 'Kansas',
        orderTotal: 19.9934
    }];

    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    };

}
