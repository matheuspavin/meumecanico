angular.module('meuMecanico').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('menu', {
            url: '/menu',
            templateUrl: 'templates/menu.html',
            abstract: true
        })
        .state('menu.home', {
            url: '/home',
            views: {
                'side-menu': {
                    templateUrl: 'templates/home.html',
                    controller: 'homeController'
                }
            }
        })
        .state('menu.visualizarcomentarios', {
            url: '/visualizarcomentarios',
            params: {obj: null},
            views: {
                'side-menu': {
                    templateUrl: 'templates/visualizarComentarios.html',
                    controller: 'reviewController'
                }
            }
        })
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
        .state('menu.editOficina', {
            url: '/editoficina',
            views: {
                'side-menu': {
                    templateUrl: 'templates/editOficina.html',
                    controller: 'oficinaController'
                }
            }
        })
        .state('menu.editClient', {
            url: '/editclient',
            views: {
                'side-menu': {
                    templateUrl: 'templates/editClient.html',
                    controller: 'clientController'
                }
            }
        })
        .state('menu.visualizaOficina', {
            url: '/visualizaoficina',
            params: {obj: null},
            views: {
                'side-menu': {
                    templateUrl: 'templates/visualizaOficina.html',
                    controller: 'visualizaOficinaController'
                }
            }
        })
        .state('menu.recomendacao', {
            url: '/recomendacao',
            params: { obj: null },
            views: {
                'side-menu': {
                    templateUrl: 'templates/recomendacao.html',
                    controller: 'recomendacaoController'
                }
            }
        })

    $urlRouterProvider.otherwise('/login');
});