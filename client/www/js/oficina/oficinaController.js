angular.module('meuMecanico').controller("oficinaController", ["$scope", "$state", "oficinaService",
    function ($scope, $state, oficinaService) {
        $scope.erro = "";
        $scope.success = "";
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

        init();

    }]);