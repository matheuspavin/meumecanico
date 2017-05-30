angular.module('meuMecanico').controller("visualizaOficinaController", ["$scope", "$state", "oficinaService", "$stateParams",
    function ($scope, $state, oficinaService, $stateParams) {
        $scope.erro = "";
        $scope.success = "";
        $scope.garage ={};

        var init = function () {
            $scope.garage = $stateParams;
        };

        $scope.home = function () {
            $state.go('home');
        };

        $scope.addRecomendacao = function (garage) {
            console.log("addRecomendacao: ", garage);
            $state.go('recomendacao', { obj: garage });
        };
        init();

    }]);