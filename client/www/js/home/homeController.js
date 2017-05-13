<<<<<<< HEAD
angular.module('meuMecanico').controller("homeController", ["$scope", "$http", function($scope, $http) {
    $http.get("http://localhost:8081/garage").then(function (response) {
        $scope.birl = response.data;
    });
}]);
=======
angular.module('meuMecanico').controller("homeController", ["$scope", "$state", "oficinaService",
    function ($scope, $state, oficinaService) {
        $scope.erro = "banana";

        var init = function () {
        };

        $scope.listAll = function () {
            usuarioService.cadastroCliente(cliente).then(function (response) {
                console.log("Response: ", response.data);
            });
        };

        init();

    }]);
>>>>>>> lucas
