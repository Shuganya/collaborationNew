'use strict';
console.log(" start of UserController...")
app
		.controller(
				'UserController',
				[
						'$scope',
						'UserService',
						'$location',
						'$rootScope',
					
						'$http',
						function($scope, UserService, $location, $rootScope,$http) {
							console.log("UserController...")
							var self = this;
							self.Userdetails = {
								userid : '',
								username : '',
								password : '',
								contact : '',
								address : '',
								email : '',
								isonline : '',
								Role : '',
								errorCode : '',
								errorMessage : ''
							};
							self.users = [];

							self.fetchAllUsers = function() {
								console.log("fetchAllUsers...")
								UserService
										.fetchAllUsers()
										.then(
												function(d) {
													self.users = d;
													alert("Registered Successfully")
													$location.path('/login')
												},
												function(errResponse) {
													console
															.error('Error while fetching Users');
												});
							};
							
							//self.fatchAllUsers();

							self.createUser = function(Userdetails) {
								console.log("createUser...")
								UserService
										.createUser(Userdetails)
										.then(
											
												self.fetchAllUsers,
												
												function(errResponse) {
													console
															.error('Error while creating Userdetails.');
												});
							};
							
							self.myProfile = function() {
								console.log("myProfile...")
								UserService
										.myProfile()
										.then(
												function(d) {
													self.Userdetails = d;
													$location.path("/myProfile")
												},
												function(errResponse) {
													console
															.error('Error while fetch profile.');
												});
							};

							self.updateUser = function(Userdetails, userid) {
								console.log("updateUser...")
								UserService
										.updateUser(Userdetails, userid)
										.then(
												self.fetchAllUsers,
												function(errResponse) {
													console
															.error('Error while updating User.');
												});
							};

							self.authenticate = function(Userdetails) {
								console.log("authenticate...")
								UserService
										.authenticate(Userdetails)
										.then(

												function(d) {

													self.Userdetails = d;
													console
															.log("Userdetails.errorCode: "
																	+ self.Userdetails.errorCode)
													if (self.Userdetails.errorCode == "404")

													{
														alert(self.Userdetails.errorMessage)

														self.Userdetails.userid = "";
														self.Userdetails.password = "";

													} else {
														console
																.log("Valid credentials. Navigating to home page")
														alert("Login Successfully")
														$location.path('/');

													}

												},
												function(errResponse) {

													console
															.error('Error while authenticate Users');
												});
							};

							self.logout = function() {
								console.log("logout")
								$rootScope.currentUser = {};
								$cookieStore.remove('currentUser');
								UserService.logout()
								$location.path('/');

							}

							self.deleteUser = function(userid) {
								console.log("UserController...")
								UserService
										.deleteUser(userid)
										.then(
												self.fetchAllUsers,
												function(errResponse) {
													console
															.error('Error while deleting User.');
												});
							};

							// self.fetchAllUsers();

							self.login = function() {
								{
									console.log('login validation????????',
											self.Userdetails);
									self.authenticate(self.Userdetails);
								}

							};

							self.submit = function() {
								{
									console.log('Saving New User', self.Userdetails);
									self.createUser(self.Userdetails);
								}
								self.reset();
							};

							self.reset = function() {
								self.Userdetails = {
									userid : '',
									username : '',
									password : '',
									contact : '',
									address : '',
									email : '',
									isonline : '',
									errorCode : '',
									errorMessage : ''
								};
								$scope.myForm.$setPristine(); // reset Form
							};

						} ]);