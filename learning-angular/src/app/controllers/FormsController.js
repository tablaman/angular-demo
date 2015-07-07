// FormsController

(function() {

    var FormsController = function($scope) {
        // Defaults
        $scope.sortBy = 'name';


        function init() {

            // log
            console.info('from FormsController.js');
            // synchronous call
            // $scope.customers = customersFactory.getCustomers();


        }

        init();

        

    }
    FormsController.$inject = ['$scope'];
    angular.module('customersApp')
        .controller('FormsController', FormsController);
}());
