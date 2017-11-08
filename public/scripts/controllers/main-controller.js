/*global angular*/

angular.module('app').controller('mainController', function ($scope, $log, $timeout, $mdDialog) {
	'use strict';

	$scope.openMore = function($mdMenu, ev) {
      $mdMenu.open(ev);
    };

    $scope.showAbout = function(ev) {
    	$mdDialog.show({
			controller: 'dialogController',
			templateUrl: 'partials/about.html',
			targetEvent: ev,
			clickOutsideToClose: false
		});
    };
	
	function init() {
		$log.info("Hello world!");
	}
	
	$timeout(init);
});