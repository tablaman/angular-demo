'use strict';

/* Controllers */
var insuranceCoAppControllers = angular.module('insuranceCoAppControllers',[]);


// Watch out for minification issues! This is done inline
insuranceCoAppControllers.controller('optionACtrl', ['$scope', 'Details',
    function($scope, Details) {
    console.log('option A Ctrl ' +Details); //trace Details object

    $scope.details = Details;

}]);



insuranceCoAppControllers.controller('optionBCtrl', ['$scope', 'DetailsOptionB',
    function($scope, Details) {
    console.log('option B Ctrl');

    $scope.details = Details;

}]);

insuranceCoAppControllers.controller('optionASummaryCtrl', ['$scope', 'Details',
    function($scope, Details) {
    console.log('option A SummaryCtrl');

    $scope.details = Details;
    // $('#confirmationDialog').modal('hide');

    $scope.showModal= function () {
        // if I had more time, I would have created a modal window as a directive to be actioned on the page 
        // to assert the user
        console.log('modal window!');
    }

}]);

insuranceCoAppControllers.controller('optionBSummaryCtrl', ['$scope', 'DetailsOptionB',
    function($scope, Details) {
    console.log('option B SummaryCtrl');

    $scope.details = Details;
    $scope.doesUserSmoke = function () {
        var outputText;

        console.log('SMOKE ');
        if ($scope.details.smoker == "true") outputText = "smoke!";
        else outputText = "do not smoke";

        return outputText;
    }


}]);
