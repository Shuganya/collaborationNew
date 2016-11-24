var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/Login',{
		templateurl:'Login.html',
		controller:'UserController'
	})
	.when('/Register',{
		templateurl:'Register.html',
		controller:'UserController'
	})
	
}
)