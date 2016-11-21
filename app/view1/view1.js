'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ '$scope', function($scope) {
	var clientId = '23e65b7291be484eab102c0c19b27c3a';
	var redirectUri = 'https://follow-me-back-74250.firebaseapp.com';
	$scope.url = 'https://api.instagram.com/oauth/authorize/?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&response_type=token';
	
	$scope.access_token = getHashValue('access_token');
	var json_following = {
		"data": [{
			"username": "carlosrive94",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/14730612_269868616747827_1025161174037037056_a.jpg",
			"full_name": "Carlos Rivero",
			"id": "3"
		},
		{
			"username": "danihip3",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/13696662_122125748231005_166934599_a.jpg",
			"full_name": "Dani Gonzalez",
			"id": "25025320"
		},
		{
			"username": "sjaskol",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/14717489_324953101204112_6134336913672241152_n.jpg",
			"full_name": "Sergi Jaskolkowski",
			"id": "250278820"
		},
		{
			"username": "davidguerreromejias",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/14717456_1747003075552931_5704833251995025408_n.jpg",
			"full_name": "David Guerrero Mejias",
			"id": "257820"
		},
		{
			"username": "titotampier",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/14730718_2144789595745645_3859661193635430400_n.jpg",
			"full_name": "Sergio Tampier",
			"id": "25655320"
		},
		{
			"username": "maria_rive_",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/13627938_1817275691840777_228180847_a.jpg",
			"full_name": "Maria Rivero Molina",
			"id": "25025380"
		}]
	};
	var json_followed = {
		"data": [{
			"username": "carlosrive94",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/14730612_269868616747827_1025161174037037056_a.jpg",
			"full_name": "Carlos Rivero",
			"id": "3"
		},
		{
			"username": "danihip3",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/13696662_122125748231005_166934599_a.jpg",
			"full_name": "Dani Gonzalez",
			"id": "25025320"
		},
		{
			"username": "sjaskol",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/14717489_324953101204112_6134336913672241152_n.jpg",
			"full_name": "Sergi Jaskolkowski",
			"id": "250278820"
		},
		{
			"username": "titotampier",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/14730718_2144789595745645_3859661193635430400_n.jpg",
			"full_name": "Sergio Tampier",
			"id": "25655320"
		},
		{
			"username": "maria_rive_",
			"profile_picture": "https://scontent-mad1-1.cdninstagram.com/t51.2885-19/s150x150/13627938_1817275691840777_228180847_a.jpg",
			"full_name": "Maria Rivero Molina",
			"id": "25025380"
		}]
	};
	$scope.following = json_following.data;
	$scope.followed = json_followed.data;	
	$scope.fuckers = [];
	
	var i;
	for (i = 0; i < $scope.following.length; i++) {
		var user = $scope.following[i];
		if(!checkIfUserExists(user,$scope.followed))$scope.fuckers.push(user);
	}
	
}]);

function checkIfUserExists(user, array){
	var i;
	for (i = 0; i < array.length; i++)	{
		if(array[i].id == user.id) return true;
	}
	return false;	
}

function getHashValue(key) {
  var matches = location.hash.match(new RegExp(key+'=([^&]*)'));
  return matches ? matches[1] : null;
}