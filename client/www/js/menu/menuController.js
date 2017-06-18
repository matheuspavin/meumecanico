angular.module('meuMecanico').controller("menuController", ["$rootScope", "$scope", "$state", "$http", "$window", "clientService", "oficinaService", function ($rootScope, $scope, $state, $http, $window, clientService, oficinaService) {

    $scope.client = true;

    $scope.logout = function () {
        console.log("a");
        delete $window.localStorage.token;
        $rootScope.openLogin();
    };

    $scope.findUser = function () {
        clientService.findClient().then(function (response) {
            console.log("Response xD: ", response);
            if (response.data.length < 1) {
                $scope.client = false;
                $scope.objClient = response.data;
            }

        });
    }

    $scope.visualizaComentarios = function () {
        oficinaService.findGarage().then(function (response) {
            console.log("xxx: ", response);
            $state.go("menu.visualizarcomentarios", { obj: response.data[0] });
        });
    };

    $scope.visualizaComentariosClient = function () {
        $state.go("menu.visualizarcomentariosclient");
    };

    $scope.findUser();

}]);