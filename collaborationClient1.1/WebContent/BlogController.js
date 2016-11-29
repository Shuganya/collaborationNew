'use strict'
console.log("start of blog controller")
app.controller('BlogController',[
                  'BlogService' ,
                  '$Scope',
                  '$location',
                  '$rootScope',
                  function($Scope,BlogService,$rootScope,$location){
                	  console.log("Blog controller..")
                	  self.Blog = {
                		  id:'',
                		  title:'',
                		  description:'',
								userid : '',
								errorCode : '',
								errorMessage : ''
							};
							self.blogs = [];
							
							self.getSelectedBlog = getBlog
							function getBlog(id){
							console.log("getting blog" +id)
							BlogService.getBlog(id)
							.then(
							function(d){
								self.Blog=d;
								$location.path("/view_blog");
								},
								function( errRespone){
								console.log("error while getting blog");
								});
							};
							
							
                  } ]);