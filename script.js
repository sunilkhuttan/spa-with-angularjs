	// create the module and name it restaurantApp
	var restaurantApp = angular.module('restaurantApp', ['ngRoute']);

	// configure our routes
	restaurantApp.config(function($routeProvider) {
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
	restaurantApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	restaurantApp.controller('aboutController', function($scope) {

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

	restaurantApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$scope.message1 = 'Mobile: 0212154548';
		$scope.message2 = 'Landline: 0921255422';
	});

	restaurantApp.controller('menuController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$scope.message1 = 'Mobile: 0212154548';
		$scope.message2 = 'Landline: 0921255422';
	});

	restaurantApp.controller('reservationController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$scope.message1 = 'Mobile: 0212154548';
		$scope.message2 = 'Landline: 0921255422';
	});

	restaurantApp.controller('galleryController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		var galleryImages = $('#gallery-images');
		//galleryImages.append("<img id='gallery-image' src='assets/images/gallery_pics/small/1.png'/>");
		var smallGalleryImages = [
		      'assets/images/gallery_pics/small/1.png', 
		      'assets/images/gallery_pics/small/2.png',
		      'assets/images/gallery_pics/small/3.png',
		      'assets/images/gallery_pics/small/4.png',
		      'assets/images/gallery_pics/small/5.png',
		      'assets/images/gallery_pics/small/6.png',
		      'assets/images/gallery_pics/small/7.png',
		      'assets/images/gallery_pics/small/8.png',
		      'assets/images/gallery_pics/small/9.png'];
		// This function display the images inside gallery page. It takes images array, number of the image and total number of images
		function displayImages(images, imageNumber) {
			var index = 0;
			var totalImages = images.length + imageNumber;
			for(var i = imageNumber ; i < (totalImages) ; i++)
			{
				galleryImages.append("<img id='gallery-image"+ i+"' style='margin-bottom : 10px; margin-laft : 10px; margin-right : 10px;' src='" +images[index] + "'/>");
				$('#gallery-image' + i).css({
		           	'margin': '10px', 'transition': 'background 0.5s linear' });
				index++;
			}
		}
		var allImagesStart = 1;
		displayImages(smallGalleryImages, allImagesStart);

		$scope.displayAllImages = function(){
			galleryImages.empty();		
			displayImages(smallGalleryImages, 1, 9);
		}

		$scope.displayfoodImages = function(){
			var imagesStart = 1;
			galleryImages.empty();
			var foodImages = [
				'assets/images/gallery_pics/small/1.png',
		      	'assets/images/gallery_pics/small/2.png',
		      	'assets/images/gallery_pics/small/3.png',
		      	'assets/images/gallery_pics/small/4.png'
			];
			displayImages(foodImages, imagesStart )
		}

		$scope.displayRestaurantImages = function(){
			var imagesStart = 5;
			galleryImages.empty();
			var restaurantImages = [
				'assets/images/gallery_pics/small/5.png',
		      	'assets/images/gallery_pics/small/6.png',
		      	'assets/images/gallery_pics/small/7.png'
			];
			displayImages(restaurantImages, imagesStart )
			
		}

		$scope.displayDinnerImages = function(){
			var imagesStart = 5;
			galleryImages.empty();
			var dinnerImages = [
				'assets/images/gallery_pics/small/2.png',
		      	'assets/images/gallery_pics/small/3.png',
		      	'assets/images/gallery_pics/small/4.png'
			];
			displayImages(dinnerImages, imagesStart )
			
		}

		$scope.displayDrinksImages = function(){
			var imagesStart = 5;
			galleryImages.empty();
			var drinkImages = [
				'assets/images/gallery_pics/small/7.png',
		      	'assets/images/gallery_pics/small/8.png'
			];
			displayImages(drinkImages, imagesStart )			
		}
		
		$scope.displayDessertImages = function(){
			var imagesStart = 5;
			galleryImages.empty();
			var dessertImages = [
		      	'assets/images/gallery_pics/small/9.png'
			];
			displayImages(dessertImages, imagesStart )			
		}
	});

	restaurantApp.controller('teamController', function($scope) {
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