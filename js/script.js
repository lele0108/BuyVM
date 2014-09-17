// script.js

	// create the module and name it scotchApp
        // also include ngRoute for all our routing needs
	var scotchApp = angular.module('BuyVM', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider, $locationProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/features', {
				templateUrl : 'pages/features.html',
				controller  : 'featuresController'
			})

			// route for the contact page
			.when('/pricing', {
				templateUrl : 'pages/pricing.html',
				controller  : 'pricingController'
			})

			.when('/faq', {
				templateUrl : 'pages/faq.html',
				controller  : 'faqController'
			});
			$locationProvider.html5Mode(true);
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('bodyController', function($scope) {

	});

	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('featuresController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('pricingController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	scotchApp.controller('faqController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

