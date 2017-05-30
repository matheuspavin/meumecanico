angular.module('meuMecanico').config(function ($stateProvider, $urlRouterProvider) {

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
        .state('editOficina', {
            url: '/editoficina',
            templateUrl: 'templates/editOficina.html',
            controller: 'oficinaController'
        })
        .state('editClient', {
            url: '/editclient',
            templateUrl: 'templates/editClient.html',
            controller: 'clientController'
        })
        .state('visualizaOficina', {
            url: '/visualizaoficina',
            templateUrl: 'templates/visualizaOficina.html',
            controller: 'visualizaOficinaController',
            params: {
                obj: null
            }
        })
        .state('recomendacao', {
            url: '/recomendacao',
            templateUrl: 'templates/recomendacao.html',
            controller: 'recomendacaoController',
            params: {
                obj: null
            }
        })

    $urlRouterProvider.otherwise('/login');
});