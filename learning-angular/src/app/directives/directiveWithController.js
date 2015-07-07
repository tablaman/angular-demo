// Map Geolocation


(function() {

    var directiveWithController = function() {

        var controller = ['$scope', function($scope) {

            init();

            function init() {
                $scope.items = angular.copy($scope.datasource);
                console.log($scope.datasource);
            }

            $scope.addItem = function() {
                var name = 'New Directive Controller Item';
                $scope.add()(name);
                $scope.items.push({
                    name: name
                });
            }

        }];




        return {
            restrict: 'EA',

            scope: {
                datasource: '=',
                add: '&'


            },
            controller: controller,
            // if using controllerAs, need the next line also define vm = this in controller.
            // controllerAs: 'vm',
            // bindToController: true,
            templateUrl: './assets/templates/directiveWithController.html'
        };

    };



    // directiveWithController.$inject = ['$scope', 'directiveWithController'];
    angular.module('customersApp')
        .directive('directiveWithController', directiveWithController);


}());
