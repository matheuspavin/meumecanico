angular.module('meuMecanico').run(['$rootScope', '$http', '$window', '$state', function ($rootScope, $http, $window, $state) {
    var init = function () {
        $rootScope.token = $window.localStorage.token;
    };
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.error('Resolve Error: ', error);
    });

    $rootScope.openLogin = function () {
        $state.go('login');
    };



    init();
}]);