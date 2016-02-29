myApp.config(function($routeProvider) {

	$routeProvider.when("/lines", {
		templateUrl: "views/lines.html",
		controller : "lineController"
		
		
	});
	
	
	
	$routeProvider.when("/details/:_id", {
		templateUrl: "views/details.html",
		controller : "routeDetailController",
		resolve: {
			departuresID: function(arcTouchAPI, $route){
				return $route.current.params._id;
		
		
			},
			checkRoute:  function(){
				return 0;
			}
		}
		
	});
	
	
	$routeProvider.when("/route", {
		templateUrl: "views/route.html",
		controller : "routeDetailController",
		resolve : {
		  checkRoute:  function(){
				return 1;
			},
		 departuresID: function(arcTouchAPI, $route){
				return $route.current.params._id;
		
		
			},
		}
		
		
	});
	
	$routeProvider.otherwise({redirectTo: "/lines"});
});




