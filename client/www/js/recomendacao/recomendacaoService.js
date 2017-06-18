angular.module("meuMecanico").factory("recomendacaoService", function ($http) {


    var _cadastroRecomendacao = function (recomendacao) {
        return $http.post("http://192.168.0.109:8081/recomendacao/cadastro", recomendacao);
    };

    var _reviewByGarage = function (recomendacao) {
        console.log("reviewbygarage", recomendacao);
        return $http.post("http://192.168.0.109:8081/recomendacao/reviewByGarage", recomendacao);
    };

    var _reviewByClient = function () {
        return $http.post("http://192.168.0.109:8081/recomendacao/reviewByClient");
    };

    return {
        cadastroRecomendacao: _cadastroRecomendacao,
        reviewByClient: _reviewByClient,
        reviewByGarage : _reviewByGarage
    };
});