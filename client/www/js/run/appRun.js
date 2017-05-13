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

    $rootScope.login = function (user) {
        var url = 'http://localhost:8081/signin';
        $http.post(url, user).then(function (response) {
            $window.localStorage.token = response.data;
            $state.go('home');
        });
    };

    init();
}]);