'use strict';

/* Controllers */
var insuranceCoAppControllers = angular.module('insuranceCoAppControllers',[]);


// Watch out for minification issues! This is done inline
insuranceCoAppControllers.controller('optionACtrl', ['$scope', 'Details',
    function($scope, Details) {
    console.log('option A Ctrl ' +Details);

    $scope.details = Details;




}]);



insuranceCoAppControllers.controller('optionBCtrl', ['$scope', 'Details',
    function($scope, Details) {
    console.log('option B Ctrl ' + Details.firstEntry);

    $scope.details = Details;


}]);

insuranceCoAppControllers.controller('optionASummaryCtrl', ['$scope', 'Details',
    function($scope, Details) {
    console.log('optionASummaryCtrl ' + Details.firstEntry);

    $scope.details = Details;
    // $('#confirmationDialog').modal('hide');

    $scope.showModal= function () {
        // if I had more time, I would have created a modal window as a directive to be actioned on the page 
        // to assert the user
        console.log('modal window!');
    }

    

    

}]);