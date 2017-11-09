/*global angular*/

angular.module('app').controller('activitiesController', function ($scope) {
	'use strict';

	$scope.activities = [
		{
			points: -50,
			time: "Today 20:57",
			what: "Was at McDonalds!"
		},
		{
			points: 57,
			time: "Today 19:32-20:29",
			what: "Went to the gym for 57 minutes!"
		},
		{
			points: 25,
			time: "Today 7:54",
			what: "Woke up before 8!"
		},
		{
			points: -25,
			time: "Today 02:21",
			what: "Went to bed after 12!"
		},
		{
			points: 49,
			time: "Yesterday 19:21-20:09",
			what: "Went to the gym for 49 minutes!"
		},
		{
			points: 25,
			time: "Yesterday 7:44",
			what: "Woke up before 8!"
		},
		{
			points: 25,
			time: "Sunday 22:58",
			what: "Went to bed before 12!"
		}
	];
});