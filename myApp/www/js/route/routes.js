(function() {
    'use strict';

    function configureRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider


        .state('app.cadastroOficina', {
                url: '/cadastroOficina',
                templateUrl: 'pages/oficina/cadastro.html',
                controller: 'OficinaCtrl as oficina',
                cache: false

            })

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html'
            })


        .state('app.login', {
                url: '/login',
                templateUrl: 'pages/login/login.html',
                controller: 'LoginCtrl as login',
                cache: false

            })


         $urlRouterProvider.otherwise('/app/home');

    }

    angular
        .module('mecanico', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider']);
})();
