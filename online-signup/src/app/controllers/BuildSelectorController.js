// BuildSelectorController.js
// @author: Mili Wijeratne

(function() {

	var BuildSelectorController = function ($scope, appSettings) {

		$scope.appSettings = appSettings;

		function init () {
			console.info('init: BuildSelectorController.js');
			console.warn('author: '+appSettings.author);
		}







		init();















	}

	BuildSelectorController.$inject = ['$scope','appSettings'];

	angular.module('amnet.onlineSignup')
		.controller('BuildSelectorController', BuildSelectorController);

}());