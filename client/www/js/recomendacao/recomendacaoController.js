angular.module('meuMecanico').controller("recomendacaoController", ["$scope", "$state", "oficinaService", "$stateParams", "clientService", "recomendacaoService",
    function ($scope, $state, oficinaService, $stateParams, clientService, recomendacaoService) {
        $scope.erro = "";
        $scope.success = "";
        $scope.rec = {};
        $scope.garage = {};
        var values = [1, 2, 3, 4, 5];

        var init = function () {
            console.log("$stateParams:Ç ", $stateParams);
            $scope.rec.garage = $stateParams.obj;
            $scope.findClient();
        };

        $scope.home = function () {
            $state.go('home');
        };

        var input = document.getElementById('input'), output = document.getElementById('output');
        input.oninput = function () {
            output1.innerHTML = 1;
            output2.innerHTML = 2;
            output3.innerHTML = 3;
            output4.innerHTML = 4;
            output5.innerHTML = 5;
        };
        input.oninput();

        $scope.findClient = function () {
            clientService.findClient().then(function (response) {
                console.log("FindClientController", response.body);
                $scope.rec.client = response.data[0];
            });
        };

        $scope.cadastro = function (recomendacao) {
            console.log(recomendacao.grade);
            if (!recomendacao.grade) {
                console.log("Dentro if")
                recomendacao.grade = "2";
                console.log("dps do if", recomendacao.grade)
            };
            recomendacao.grade = Number(recomendacao.grade);

            if (recomendacao.grade < 5) {
                recomendacao.grade = recomendacao.grade + 1;
            }

            console.log("Recomnedacao: ", recomendacao);
            recomendacaoService.cadastroRecomendacao(recomendacao).then(function (response) {
                console.log("cadastroRecomendacao", response);
                $state.go("home");

            });

            $scope.buscaReview = function (selectedGarage) {
                recomendacaoService.buscaReview(selectedGarage).then(function (response) {
                    console.log("ReviewsRecController: ", response);
                });
            };

        };

        init();

    }]);