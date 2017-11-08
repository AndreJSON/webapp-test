/*global angular*/

angular.module('app').controller('mainController', function ($scope, $log, $timeout) {
	'use strict';
	
	function init() {
		$log.info("Hello world!");
	}
	
	$timeout(init);
});