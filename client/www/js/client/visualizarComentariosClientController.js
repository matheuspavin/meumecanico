angular.module('meuMecanico').controller("visualizarComentariosClientController", ["$scope", "$state", "oficinaService", "$stateParams", "clientService", "recomendacaoService",
    function ($scope, $state, oficinaService, $stateParams, clientService, recomendacaoService) {
        $scope.reviews = [];
        $scope.garage = {};

        var init = function () {
            $scope.buscaReview();
            $scope.findUser();
        };

        $scope.home = function () {
            $state.go('menu.home');
        };

        $scope.visualizarOficina = function (selectedGarage) {
            console.log("chamou");
            $state.go('menu.visualizaOficina', { obj: selectedGarage });
        };

        $scope.buscaReview = function () {
            recomendacaoService.reviewByClient().then(function (response) {
                console.log("ReviewsRecController: ", response);
                $scope.reviews = response.data;
            });
        };


        $scope.findUser = function () {
            clientService.findClient().then(function (response) {
                console.log("asasasa: ", response);
                $scope.client = response.data[0];
            });
        }

        $scope.visualizarOficina = function (id) {
            var obj = {};
            obj.id = id ;
            oficinaService.findGarageById(obj).then(function (response) {
                $state.go('menu.visualizaOficina', { obj: response.data[0] });
            })
        };

        init();

    }]);