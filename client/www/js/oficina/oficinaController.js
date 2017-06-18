angular.module('meuMecanico').controller("oficinaController", ["$scope", "$state", "oficinaService", "clientService",
    function ($scope, $state, oficinaService, clientService) {
        $scope.erro = "";
        $scope.success = "";
        $scope.client = true;

        var init = function () {
            $scope.findGarage();
        };

        $scope.findGarage = function () {
            oficinaService.findGarage().then(function (response) {
                $scope.garage = response.data[0];
            });
        };

        $scope.edit = function (garage) {
            oficinaService.editGarage(garage).then(function (response) {
                $scope.success = "Os dados foram atualizados com sucesso!";
            }).catch(function (error) {
                $scope.erro = "Não foi possivel atualizar os dados.";
            });
        };

        $scope.back = function () {
            $state.go('menu.home');
        };

        $scope.findUser = function () {
            clientService.findClient().then(function (response) {
                console.log("Response xD: ", response);
                if (response.data.length < 1) {
                    $scope.client = false;
                }

            });
        }
        init();

    }]);