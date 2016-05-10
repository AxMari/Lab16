angular.module('myModule', ['ngRoute'])
	   .config(function($routeProvider){
	   	 	$routeProvider
	   	 		.when('/', 
	   	 		{
	   	 			controller: 'myController',
	   	 			templateUrl: 'partials/default.html'
	   	 		})
	   	 		.when('/cat',
	   	 		{
	   	 			controller: 'myController',
	   	 			templateUrl: 'partials/cat.html'
	   	 		})
	   	 		.when('/dog',
	   	 		{
	   	 			controller: 'myController',
	   	 			templateUrl: 'partials/dog.html'
	   	 		})
	   	 		.when('/seahorse',
	   	 		{
	   	 			controller: 'myController',
	   	 			templateUrl: 'partials/seahorse.html'
	   	 		})
	   	 		.when('/birb',
	   	 		{
	   	 			controller: 'myController',
	   	 			templateUrl: 'partials/birb.html'
	   	 		})
	   	 		.when('/birb2',
	   	 		{
	   	 			controller: 'myController',
	   	 			templateUrl: 'partials/birb2.html'
	   	 		})

	   	 		.when('/fail',
	   	 		{
	   	 			controller: 'myController',
	   	 			templateUrl: 'partials/fail.html'
	   	 		})
	   	 		.otherwise({ redirectTo: '/fail'});

	   });	



