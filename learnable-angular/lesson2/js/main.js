var app = angular.module("littleSketcher", []);

app.controller('drawingListCtrl', function ($scope) {
	$scope.drawings = [	{ name: "drawing 1" },
						{ name: "drawing 2" },
						{ name: "drawing 3" } ]
})

