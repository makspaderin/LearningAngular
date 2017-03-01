angular
	.module('Angular')
	.controller('cribsController', function($scope, cribsFactory) {
		
		$scope.cribs = cribsFactory.getCribs();

		var showMessage = false;

		$scope.sayHello = function() {
			showMessage = true;
		}

	});