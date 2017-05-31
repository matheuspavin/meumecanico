angular.module("meuMecanico").factory("recomendacaoService", function ($http) {


    var _cadastroRecomendacao = function (recomendacao) {
        return $http.post("http://localhost:8081/recomendacao/cadastro", recomendacao);
    };

    var _reviewByGarage = function (recomendacao) {
        console.log("reviewbygarage",recomendacao);
        return $http.post("http://localhost:8081/recomendacao/reviewByGarage", recomendacao);
    };
    
    return {
        cadastroRecomendacao: _cadastroRecomendacao,
        reviewByGarage : _reviewByGarage
    };
});