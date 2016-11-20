	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			//route for the menu page
			.when('/menu', {
				templateUrl : 'pages/menu.html',
				controller  : 'menuController'
			})

			//route for the reservation page
			.when('/reservation', {
				templateUrl : 'pages/reservation.html',
				controller  : 'reservationController'
			})

			//route for the gallery page
			.when('/gallery', {
				templateUrl : 'pages/gallery.html',
				controller  : 'galleryController'
			})

			//route for the team page
			.when('/team', {
				templateUrl : 'pages/team.html',
				controller  : 'teamController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {

		$scope.message = 'Look! I am an about page.';
		$(function () {
		    var aboutUsDiv = $('#about-us-pics');
		    var backgrounds = [
		      'url(assets/images/about-us/1.jpg)', 
		      'url(assets/images/about-us/2.png)',
		      'url(assets/images/about-us/3.jpg)',
		      'url(assets/images/about-us/4.jpg)',
		      'url(assets/images/about-us/5.jpg)',
		      'url(assets/images/about-us/6.jpg)',
		      'url(assets/images/about-us/8.jpg)',
		      'url(assets/images/about-us/7.jpg)'];
		    var current = 0;

		    function nextBackground() {
		        aboutUsDiv.css({
		            'background': backgrounds[current = ++current % backgrounds.length],'background-position': 'center', 'background-repeat': 'no-repeat',
		              'transition': 'background 0.5s linear' });

		        setTimeout(nextBackground, 4000);
		    }
		    setTimeout(nextBackground, 4000);
		    aboutUsDiv.css('background', backgrounds[0]);
		});
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$scope.message1 = 'Mobile: 0212154548';
		$scope.message2 = 'Landline: 0921255422';
	});

	scotchApp.controller('menuController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$scope.message1 = 'Mobile: 0212154548';
		$scope.message2 = 'Landline: 0921255422';
	});

	scotchApp.controller('reservationController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$scope.message1 = 'Mobile: 0212154548';
		$scope.message2 = 'Landline: 0921255422';
	});

	scotchApp.controller('galleryController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$scope.message1 = 'Mobile: 0212154548';
		$scope.message2 = 'Landline: 0921255422';
	});

	scotchApp.controller('teamController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$scope.message1 = 'Mobile: 0212154548';
		$scope.message2 = 'Landline: 0921255422';
	});


	$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});