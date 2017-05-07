angular.module('meuMecanico').controller("homeController", ["$scope", "$http", function($scope, $http) {
    $http.get("http://localhost:8081/garage").then(function (response) {
        $scope.birl = response.data;
    });
}]);