var bookStoreApp = angular.module('bookStoreApp', ['ui.router', 'ngAnimate', 'ng-pagination', 'bookStoreCtrls', 'bookStoreFilters', 'bookStoreServices', 'bookStoreDirectives']);

bookStoreApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/hello');
    $stateProvider.state('hello', {
        url: '/hello',
        views: {
            '': {
                templateUrl: 'tpls/pages/hello.html',
                controller: 'HelloCtrl'
            }
        }
    }).state('list', {
        url: '/list',
        views: {
            '': {
                templateUrl: 'tpls/pages/bookList.html',
                controller: 'BookListCtrl'
            }
        }

    }).state('select', {
        url: '/select',
        views: {
            '': {
                templateUrl: 'tpls/pages/select.html',
                controller: 'SelectCtrl'
            }
        }
    }).state('table', {
        url: '/table',
        views: {
            '': {
                templateUrl: 'tpls/pages/table.html',
                controller: 'TableCtrl'
            }
        }
    }).state('datepicker', {
        url: '/datepicker',
        views: {
            '': {
                templateUrl: 'tpls/pages/datepicker.html',
                controller: 'DatePickerCtrl'
            }
        }
    }).state('ui', {
        url: '/ui',
        views: {
            '': {
                templateUrl: 'tpls/pages/ui.html',
                controller: 'UICtrl'
            }
        }
    }).state('admin', {
        url: '/admin',
        views: {
            '': {
                templateUrl: 'tpls/body.html',
                controller: 'AdminCtrl'
            },
            'left@admin': {
                templateUrl: 'tpls/left.html',
                controller: 'LeftCtrl'
            },
            'right@admin': {
                templateUrl: 'tpls/right.html',
                controller: 'RightCtrl'
            }
        }
    })
});