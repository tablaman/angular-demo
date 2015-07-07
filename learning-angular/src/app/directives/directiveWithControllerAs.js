// Map Geolocation


(function() {

    var directiveWithControllerAs = function() {

        var controller = function() {

            var vm = this;

            init();

            function init() {
                vm.items = angular.copy(vm.datasource);
                console.log(vm.datasource);
            }

            vm.addItem = function() {
                var name = 'New Directive Controller Item';
                vm.add()(name);
                vm.items.push({
                    name: name
                });
            }

        };




        return {
            restrict: 'EA',

            scope: {
                datasource: '=',
                add: '&'


            },
            controller: controller,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: './assets/templates/directiveWithControllerAs.html'
        };

    };



    angular.module('customersApp')
        .directive('directiveWithControllerAs', directiveWithControllerAs);


}());
