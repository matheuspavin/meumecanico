angular.module('meuMecanico').controller("loginController", ["$rootScope", "$scope", "$state", "$http", "$window", function ($rootScope, $scope, $state, $http, $window) {

    $scope.validaLogin = function (user) {
        var url = 'http://192.168.0.109:8081/signin';
        $http.post(url, user).then(function (response) {
            $window.localStorage.token = response.data;

            var token = response.data;

            $state.go('menu.home');
        }).catch(function (error) {
            $scope.message = "Erro nos dados de acesso! Favor tente novamente.";
        })
    };

    $scope.cadastro = function () {
        $state.go("cadastro");
    };



}]);