'use strict';
 
app.factory('BlogService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("BlogService...")
	
	var BASE_URL='http://localhost:8081/CollabBackEnd'
		
		return {
	
		getBlog:function(id){
			
			 return $http.get(BASE_URL+'/blog/'+id)
			 .then(
					 function(response){
						 $rootScope.selectedBlog=response.data
						 return response.data;
					 },
					 function(errResponse){
						 console.log("Error in blog service while getting blog");
						 return $q.reject(errReponse);
					 });
			 
		}
	
	};
	
}]);	