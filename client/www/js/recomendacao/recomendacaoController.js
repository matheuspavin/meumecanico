angular.module('meuMecanico').controller("recomendacaoController", ["$scope", "$state", "oficinaService", "$stateParams", "clientService", "recomendacaoService",
    function ($scope, $state, oficinaService, $stateParams, clientService, recomendacaoService) {
        $scope.erro = "";
        $scope.success = "";
        $scope.rec = {};
        $scope.garage = {};

        var init = function () {
            console.log("$stateParams:Ç ", $stateParams);
            $scope.rec.garage = $stateParams.obj;
            $scope.findClient();
        };

        $scope.home = function () {
            $state.go('menu.home');
        };

        $scope.findClient = function () {
            clientService.findClient().then(function (response) {
                $scope.rec.client = response.data[0];
            });
        };

        $scope.cadastro = function (recomendacao) {
            recomendacao.grade = $scope.slider.value;
            console.log(recomendacao.grade);

            recomendacaoService.cadastroRecomendacao(recomendacao).then(function (response) {
                console.log("cadastroRecomendacao", response);
                $state.go("menu.home");

            });

            $scope.buscaReview = function (selectedGarage) {
                recomendacaoService.buscaReview(selectedGarage).then(function (response) {
                    console.log("ReviewsRecController: ", response);
                });
            };

        };

        $scope.slider = { //requires angular-bootstrap to display tooltips
            value: 3,
            options: {
                floor: 1,
                ceil: 5,
                showTicksValues: true,
                ticksValuesTooltip: function (v) {
                    return 'Tooltip for ' + v;
                }
            }
        };

        init();

    }]);