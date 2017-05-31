angular.module('meuMecanico').controller("cadastroController", ["$scope", "$state", "usuarioService", "oficinaService",
    function ($scope, $state, usuarioService, oficinaService) {
        $scope.erro = "banana";

        var init = function () {
        };

        $scope.cadastrarCliente = function (cliente) {
            usuarioService.cadastroCliente(cliente).then(function (response) {
                console.log("Response: ", response.data);
                    $state.go("login");
            });
        };

        $scope.oficinaService = function (oficina) {
            oficinaService.cadastroOficina(oficina).then(function (response) {
                $state.go("login");
            });
        };

        $scope.login = function () {
            $state.go("login");
        }

        init();

    }]);