var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })
  .when('/list_blog', {
    templateUrl : 'pages/list_blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })
  .when('/login', {
    templateUrl : 'pages/login.html',
    controller  : 'UserController'
  })
 .when('/register', {
    templateUrl : 'pages/register.html',
    controller  : 'UserController'
  })
  .when('/search_friend', {
    templateUrl : 'pages/search_friend.html',
    controller  : 'FriendController'
  })


  .otherwise({redirectTo: '/'});
});

/*app.run(function($rootScope,$location,$cookieStore,$http){
$rootScope.$on('$locationChangeStart',function(event,next,current){
	
	var restrictedPage=$.inArray($location.path(),['/login','/register'])=== -1;
	console.log("restricted page" +restrictedPage)
	var loggedIn =$rootScope.currentUser;
	console.log("logged In" +loggedIn)
	if(restrictedPage && !loggedIn){
		$location.path('/login');
	}
	});	


$rootScope.currentUser=$cookieStore.get('currentUser') || {};
if($rootScope.currentUser){
	$http.defaults.header.common[Authorization] ='Basic' + $rootScope.currentUser;
}

});*/