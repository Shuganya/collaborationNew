'use strict';
app.controller('UserController',[
                                 
                                 '$scope',
                                 'UserService',
                                 '$location',
                                 '$rootScope',
                                 function($scope,UserService,$location,$rootScope){
                                	 console.log("Usercontroller..")
                                	 var self=this;
                                	 self.userdetail={
                                			 userid:'',
                                			 username:'',
                                			 password:'',
                                			 mobile:'',
                                			 address:'',
                                			 email:'',
                                			 role:'',
                                			 errorMessage:'',
                                			 
                                	 };
                                	 self.users=[];
                                	 self.fetchAllUsers=fuction()
                                	 {
                                		 console.log("fetchAllUsers....")
                                		 UserService.fetchAllUsers().then(function(d){
                                			 self.users=d;
                                		 },
                                		 function(errResponse){
                                			 console.error('error while fetching users');
                                		 });
                                		 };
                                		 
                            self.createUser=function(userdetails) {
                            	console.log("createuser...")
                            	UserService.createUser(userdetails).then(self.fetchAllUsers,function(errResponse){
                            		console.error('error while creating user');
                            	});
                            } ;  		 
                              self.updateUser=function(userdetails,userid)  {
                            	  console.log("update user..")
                            	  UserService.updateUser(userdetails,userid).then(self.fetchAllUsers,function(errResponse){
                            		  console.error('error while updating user');
                            	  });
                              }	;	 
                                		 
                                 }
                                
                                 ])