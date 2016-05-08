var bookStoreServices = angular.module('bookStoreServices', []);

/*
*	@param {string} url 访问接口链接
*/
bookStoreServices.factory('UserServe', ['$http', '$q', function($http, $q){
	return {
		query: function(url){
			var deferred = $q.defer();
			$http.get(url).success(function(data, status, headers, config){
				// 加载成功后做一些事
				deferred.resolve(data);
			}).error(function(data, status, headers, config){
				// 处理错误
				deferred.reject(data);
			});
			return deferred.promise;
		},
		post: function(url, objData){
			var deferred = $q.defer();
			$http.post(url, objData, {'Content-Type':'application/x-www-form-urlencoded'}).success(function(data, status, headers, config){
				deferred.resolve(data);
			}).error(function(data, status, headers, config){
				deferred.reject(data);
			});
			return deferred.promise;
		}
	}
}]);