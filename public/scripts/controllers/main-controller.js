/*global angular*/

angular.module('app').controller('mainController', function ($scope, $log, $mdDialog) {
	'use strict';

	$scope.points = 137;

	$scope.openMore = function($mdMenu, ev) {
      $mdMenu.open(ev);
    };

    $scope.showDialog = function(name, ev) {
    	$mdDialog.show({
			controller: 'dialogController',
			templateUrl: 'partials/' + name + '.html',
			targetEvent: ev,
			clickOutsideToClose: false
		});
    };
});