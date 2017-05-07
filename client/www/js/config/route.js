 angular.module('meuMecanico').config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        })
        .state('cadastro', {
            url: '/cadastro',
            templateUrl: 'templates/cadastro.html',
            controller: 'cadastroController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })

        $urlRouterProvider.otherwise('/login');
    });