angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory) {

		//$scope.cribs;\
		$scope.sayhello = function() {
			console.log("button clicked");
		}

		cribsFactory.getCribs().success(function(data) {
			$scope.cribs = data;
		}).error(function(error) {
			console.log(error);
		})
	});