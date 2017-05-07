angular.module('meuMecanico').controller("cadastroController", ["$scope", "$state", "usuarioService",
    function ($scope, $state, usuarioService) {
        $scope.erro = "banana";

        var init = function () {
        };

        $scope.cadastrarCliente = function (cliente) {
            usuarioService.cadastroCliente(cliente).then(function (response) {
                console.log("Response: ", response.data);
            });
        };

        $scope.cadastrarOficina = function (oficina) {
            usuarioService.cadastroOficina(oficina).then(function (response) {
                console.log("Response: ", response.data);
            });
        };

        init();
        
    }]);