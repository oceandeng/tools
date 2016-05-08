var bookStoreApp = angular.module('bookStoreApp', ['ui.router', 'ngAnimate', 'ng-pagination', 'bookStoreCtrls', 'bookStoreFilters', 'bookStoreServices', 'bookStoreDirectives']);

bookStoreApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/hello');
    $stateProvider.state('hello', {
        url: '/hello',
        views: {
            '': {
                templateUrl: 'tpls/hello.html',
                controller: 'HelloCtrl'
            }
        }
    }).state('list', {
        url: '/list',
        views: {
            '': {
                templateUrl: 'tpls/bookList.html',
                controller: 'BookListCtrl'
            }
        }

    }).state('select', {
        url: '/select',
        views: {
            '': {
                templateUrl: 'tpls/select.html',
                controller: 'SelectCtrl'
            }
        }
    }).state('table', {
        url: '/table',
        views: {
            '': {
                templateUrl: 'tpls/table.html',
                controller: 'TableCtrl'
            }
        }
    }).state('datepicker', {
        url: '/datepicker',
        views: {
            '': {
                templateUrl: 'tpls/datepicker.html',
                controller: 'DatePickerCtrl'
            }
        }
    })
});