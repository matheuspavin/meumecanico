angular.module('meuMecanico').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('menu', {
            url: '/menu',
            controller: 'menuController',
            templateUrl: 'templates/menu.html',
            cache: false,
            abstract: true
        })
        .state('menu.home', {
            url: '/home',
            cache: false,
            views: {
                'side-menu': {
                    templateUrl: 'templates/home.html',
                    controller: 'homeController'
                }
            }
        })
        .state('menu.visualizarcomentarios', {
            url: '/visualizarcomentarios',
            params: { obj: null },
            cache: false,
            views: {
                'side-menu': {
                    templateUrl: 'templates/visualizarComentarios.html',
                    controller: 'reviewController'
                }
            }
        })
        .state('login', {
            url: '/login',
            cache: false,
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        })
        .state('cadastro', {
            url: '/cadastro',
            cache: false,
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
            cache: false,
            params: { obj: null },
            cache: false,
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
            cache: false,
            views: {
                'side-menu': {
                    templateUrl: 'templates/recomendacao.html',
                    controller: 'recomendacaoController'
                }
            }
        })
        .state('menu.visualizarcomentariosclient', {
            url: '/visualizarcomentariosclient',
            cache: false,
            params: { obj: null },
            views: {
                'side-menu': {
                    templateUrl: 'templates/visualizarComentariosClient.html',
                    controller: 'visualizarComentariosClientController'
                }
            }
        })
        .state('menu.filterReview', {
            url: '/filterReview',
            cache: false,
            params: { obj: null },
            views: {
                'side-menu': {
                    templateUrl: 'templates/filterReview.html',
                    controller: 'filterReviewController'
                }
            }
        })

    $urlRouterProvider.otherwise('/login');
});