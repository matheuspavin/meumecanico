angular.module('meuMecanico').controller("loginController", function($scope, $state) {
    var vm = this;
    console.log(vm);   

    $scope.validaLogin = function (user){
        if(user && user.email == "lucasveberdebrida@gmail.com"){
            $scope.erro = "Usuário válido!";
        } else{
            $scope.erro = "Usuário não está cadastrado no sistema";
        }
    };

    $scope.cadastro = function(){
        $state.go("cadastro");
    };
 
});