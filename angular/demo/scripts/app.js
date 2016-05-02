var routerApp = angular.module('routerApp', ['ui.router', 'DemoModule']);

/*
由于整个应用都会和路由打交道，所以在这里把$state和$stateParams这两个对象放到$rootScope上，方便其他地方引用和注入。
* 这里的run方法只会在angular启动的时候运行一次
* @params {[type]} $rootScope
* @params {[type]} $state
* @params {[type]} $stateParams
* @return {[type]}
*/
routerApp.run(function($rootScope, $state, $stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
})

/*
* 配置路由
* 注意这里采用的是ui-router这个路由，而不是ng原生的路由
* ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router
* @params {[type]} $stateProvider
* @params {[type]} $urlRouterProvider
* @return {[type]}
*/
routerApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider.state('index', {
		url: '/index',
		views: {
			'': {
				templateUrl: 'tpls/home.html'
			},
			'nav@index': {
				templateUrl: 'tpls/nav.html'
			},
			'main@index': {
				templateUrl: 'tpls/main.html'
			}
		}
	})		

});