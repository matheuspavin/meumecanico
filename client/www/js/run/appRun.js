angular.module('meuMecanico').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.error('Resolve Error: ', error);
    });
}]);