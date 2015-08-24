// FormsController

(function() {

    var FormsController = function($scope) {
        // Defaults
        $scope.sortBy = 'name';

        $scope.model = {};
        $scope.fields = {};



        function init() {

            // log
            console.info('from FormsController.js');
            // synchronous call
            // $scope.customers = customersFactory.getCustomers();
            $scope.model = {
                firstName: 'Obe Wan'
            }
            $scope.fields = [{
                type: 'input',
                key: 'firstName',
                templateOptions: {
                    label: 'First Name'
                },
                validators: {
                    notBob: '$viewValue !== "bob"'
                }
            }, {
                template: '<hr />'
            }, {
                type: 'select',
                key: 'something',
                templateOptions: {
                    label: 'select something'
                }
            }]

        }

        init();



    }
    FormsController.$inject = ['$scope'];
    angular.module('customersApp')
        .controller('FormsController', FormsController);
}());
