angular.module('meuMecanico').controller("visualizaOficinaController", ["$scope", "$state", "oficinaService", "$stateParams",
    function ($scope, $state, oficinaService, $stateParams) {
        $scope.erro = "";
        $scope.success = "";
        $scope.garage = {};

        var init = function () {
            $scope.garage = $stateParams.obj;
        };

        $scope.home = function () {
            $state.go('home');
        };

        $scope.visualizarRecomendacao = function () {
            $state.go('');
        };

        $scope.addRecomendacao = function (garage) {
            console.log("addRecomendacao: ", garage);
            $state.go('recomendacao', { obj: garage });
        };

        $scope.buscaReview = function (selectedGarage) {
            $state.go('visualizarcomentarios', { obj: selectedGarage });
        };

        init();

    }]);