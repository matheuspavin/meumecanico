angular.module('meuMecanico').controller("filterReviewController", ["$scope", "$state", "oficinaService", "$stateParams", "clientService", "recomendacaoService",
    function ($scope, $state, oficinaService, $stateParams, clientService, recomendacaoService) {

        $scope.garages = [];

        var init = function () {
            $scope.listAll();
        };

        $scope.listAll = function () {
            oficinaService.listAll().then(function (response) {
                console.log("ResponseVeber: ", response.data);
                $scope.garages = response.data;
            }).catch(function (error) {
                $scope.message = "Erro nos dados de acesso! Favor tente novamente.";
            })
        };

        $scope.verificaNota = function (garage) {
            console.log(garage);
            if (garage.media) {
                return garage.media >= $scope.slider.value;
            }
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