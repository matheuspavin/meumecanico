angular.module('meuMecanico').controller("recomendacaoController", ["$scope", "$state", "oficinaService", "$stateParams",
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

        init();

    }]);