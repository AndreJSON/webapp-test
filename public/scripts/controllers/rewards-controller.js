/*global angular*/

angular.module('app').controller('rewardsController', function ($scope, $mdDialog) {
	'use strict';

	$scope.rewards = [
		{
			points: 50,
			what: "Free Coffee at Nymble"
		},
		{
			points: 75,
			what: "10kr discount at restaurant Q"
		},
		{
			points: 100,
			what: "Sandwich for 5kr at KTHB"
		},
		{
			points: 200,
			what: "15kr discount at Syster o Bror"
		},
		{
			points: 500,
			what: "10% off one purchase at Kårbokhandeln"
		}
	];
});