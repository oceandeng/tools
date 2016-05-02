var demoModule = angular.module('DemoModule', ['UserServeModule']);

demoModule.controller('DemoCtrl', ['$scope', 'UserServe', 'JsonServe', function($scope, UserServe, JsonServe){

	$scope.user = {};
	$scope.json = {};

	UserServe.query().then(function(data){	//处理正确
		$scope.user.username = data.data.username;
		$scope.user.age = data.data.age;
	}, function(data){	//处理错误
		console.log(data);
	});

	JsonServe.query().then(function(data){
		$scope.json.items = data.records;
	});

}]);