// BuildSelectorController.js
// @author: Mili Wijeratne

(function() {

    var MainController = function($scope, appSettings) {

        var newSelection = null;

        $scope.appSettings = appSettings;
        $scope.footnote = null;



        init();

        function init() {
            console.info('init: MainController.js');
            console.log('author: ' + appSettings.author);

        }

        // Event handlers
        $scope.toggleSelection = function(sender) {

            newSelection = sender;

            var selectedChoice = _.find($scope.appSettings.broadbandPlans.options, function(choice) {
                return choice.selected === true;
            });
            // if user has clicked on the same item
            // avoid the loop.
            if (newSelection != selectedChoice) {
                if (selectedChoice != undefined && selectedChoice != newSelection) {
                    selectedChoice.selected = false;
                }
                newSelection.selected = !newSelection.selected;
                console.log(selectedChoice);
            }

        }










    }

    MainController.$inject = ['$scope', 'appSettings'];

    angular.module('amnet.onlineSignup')
        .controller('MainController', MainController);

}());
