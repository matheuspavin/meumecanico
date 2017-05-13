angular.module('meuMecanico').controller("homeController", ["$scope", "$state", "oficinaService",
    function ($scope, $state, oficinaService) {
        $scope.erro = "banana";

        var init = function () {
        };

        $scope.listAll = function () {
            usuarioService.cadastroCliente(cliente).then(function (response) {
                console.log("Response: ", response.data);
            });
        };

        init();

    }]);