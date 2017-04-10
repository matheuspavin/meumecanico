 angular.module('meuMecanico').config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginController'
            })
        $urlRouterProvider.otherwise('/login');
    });