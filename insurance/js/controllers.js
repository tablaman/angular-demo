'use strict';

/* Controllers */
var insuranceCoAppControllers = angular.module('insuranceCoAppControllers',[]);


// Watch out for minification issues! This is done inline
insuranceCoAppControllers.controller('optionACtrl', ['$scope', '$http',
    function($scope) {


    //Note you can do splice to limit to 5 phones:
    // $scope.phones = data.splice(0,5);

    $scope.hello = "Hello World!";
    $scope.orderProp = 'age';

}]);

insuranceCoAppControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
//        $scope.phoneId = $routeParams.phoneId;

        //fetch individual json objects for each phone from server
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
            $scope.mainImageUrl = data.images[1];

        });


        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;


        }
        $scope.hello = function (sayname) {
            alert('hey there ' + sayname);
        }
    }]);



