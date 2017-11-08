/*global angular*/

angular.module('app').controller('mainController', function ($scope, $log, $timeout, $mdDialog) {
	'use strict';

	$scope.openMore = function($mdMenu, ev) {
      $mdMenu.open(ev);
    };
	
	function init() {
		$log.info("Hello world!");
	}
	
	$timeout(init);
});