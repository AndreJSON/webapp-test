/*global angular*/

angular.module('app').controller('rewardsController', function ($scope, $mdDialog) {
	'use strict';

	$scope.rewards = [
		{
			points: 50,
			what: "Free Coffee at Nymble"
		},
		{
			points: 100,
			what: "Sandwich for 5kr at KTHB"
		}
	];
});