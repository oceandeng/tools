var userServeModule = angular.module('UserServeModule', []);

userServeModule.factory('UserServe', ['$http', '$q', function($http, $q){
	return {
		query: function(){
			var deferred = $q.defer();
			$http.get('http://ocean.cn/interface/success.php').success(function(data, status, headers, config){
				// 加载成功后做一些事
				deferred.resolve(data);
			}).error(function(data, status, headers, config){
				// 处理错误
				deferred.reject(data);
			});
			return deferred.promise;
		}
	}
}]);

userServeModule.factory('JsonServe', ['$http', '$q', function($http, $q){
	return {
		query: function(){
			var deferred = $q.defer();
			$http.get('http://ocean.cn/interface/custom_JSON.php').success(function(data, status, headers, config){
				deferred.resolve(data);
			}).error(function(data, status, headers, config){
				deferred.reject(data);
			});
			return deferred.promise;
		}
	}
}]);