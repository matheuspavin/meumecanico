angular.module('meuMecanico').controller("loginController", ["$rootScope", "$scope", "$state", function($rootScope, $scope, $state) {

    $scope.validaLogin = function (user) {
        $rootScope.login(user);
    };

    $scope.cadastro = function(){
        $state.go("cadastro");
    };
 
}]);