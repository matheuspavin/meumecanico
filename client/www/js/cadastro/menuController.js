angular.module('meuMecanico').controller("MenuController", ["$scope", "$ionicSideMenuDelegate",
    function ($scope, $state, oficinaService, recomendacaoService) {
        $scope.toggleLeftSideMenu = function () {
        console.log("oi");
            
            $ionicSideMenuDelegate.toggleLeft();
        };

    }]);