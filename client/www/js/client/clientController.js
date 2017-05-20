angular.module('meuMecanico').controller("clientController", ["$scope", "$state", "clientService",
    function ($scope, $state, clientService) {
        $scope.erro = "";
        $scope.success = "";
        var init = function () {
            $scope.findClient();
        };

        $scope.findClient = function () {
            clientService.findClient().then(function (response) {
                console.log("FindClientController", response.body);
                $scope.client = response.data[0];
            });
        };

        $scope.edit = function (client) {
            clientService.editClient(client).then(function (response) {
                $scope.success = "Os dados foram atualizados com sucesso!";
            }).catch(function (error) {
                $scope.erro = "Não foi possivel atualizar os dados.";
            });
        };

        $scope.back = function () {
            $state.go('home');
        };

        init();

    }]);