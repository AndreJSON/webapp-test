/*global angular*/

angular.module('app').controller('mainController', function ($scope, $log, $timeout, $mdDialog) {
	'use strict';

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
	
	function init() {
		$log.info("Hello world!");
	}
	
	$timeout(init);
});