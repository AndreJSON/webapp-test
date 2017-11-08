/*global angular*/

angular.module('app').controller('dialogController', function ($scope, $mdDialog) {
	'use strict';

	$scope.close = function () {
		$mdDialog.hide();
	};
});