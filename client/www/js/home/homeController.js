angular.module('meuMecanico').controller("homeController", ["$scope", "$state", "oficinaService", "recomendacaoService",
    function ($scope, $state, oficinaService, recomendacaoService) {
        $scope.erro = "banana";
        $scope.garages = [];
        //$http.get("http://localhost:8081/garage").then(function (response) {
        var init = function () {
            $scope.listAll();
        };

        $scope.listAll = function () {
            oficinaService.listAll().then(function (response) {
                console.log("Response: ", response.data);
                $scope.garages = response.data;
            }).catch(function (error) {
                $scope.message = "Erro nos dados de acesso! Favor tente novamente.";
            })
        };

        $scope.visualizarOficina = function (selectedGarage) {
            console.log("chamou", selectedGarage);
            $state.go('menu.visualizaOficina', { obj: selectedGarage });
        };

        $scope.buscaReview = function (selectedGarage) {
          $state.go('menu.visualizarcomentarios', { obj: selectedGarage });
        };
        init();

    }]);