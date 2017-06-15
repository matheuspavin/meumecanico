angular.module('meuMecanico').controller("visualizaOficinaController", ["$scope", "$state", "oficinaService", "$stateParams",
    function ($scope, $state, oficinaService, $stateParams) {
        $scope.erro = "";
        $scope.success = "";
        $scope.garage = {};

        var init = function () {
            console.log($stateParams.obj);
            $scope.garage = $stateParams.obj;
        };

        $scope.home = function () {
            $state.go('menu.home');
        };

        $scope.addRecomendacao = function (garage) {
            console.log("addRecomendacao: ", garage);
            $state.go('menu.recomendacao', { obj: garage });
        };

        $scope.buscaReview = function (selectedGarage) {
            $state.go('menu.visualizarcomentarios', { obj: selectedGarage });
        };

        init();

    }]);