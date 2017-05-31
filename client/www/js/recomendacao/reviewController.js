angular.module('meuMecanico').controller("reviewController", ["$scope", "$state", "oficinaService", "$stateParams", "clientService", "recomendacaoService",
    function ($scope, $state, oficinaService, $stateParams, clientService, recomendacaoService) {
        $scope.reviews = [];
        $scope.garage = {};
        var init = function () {
            console.log("$stateParams:Ç ", $stateParams);
            $scope.buscaReview($stateParams.obj);
            $scope.garage = $stateParams.obj;
        };

        $scope.home = function () {
            $state.go('home');
        };

        $scope.visualizarOficina = function (selectedGarage) {
            console.log("chamou");
            $state.go('visualizaOficina', { obj: selectedGarage });
        };
        
        $scope.buscaReview = function (selectedGarage) {
            recomendacaoService.reviewByGarage(selectedGarage).then(function (response) {
                console.log("ReviewsRecController: ", response);
                $scope.reviews = response.data;
            });
        };

        init();

    }]);