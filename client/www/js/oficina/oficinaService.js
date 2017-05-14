angular.module("meuMecanico").factory("oficinaService", function ($http) {


    var _cadastroOficina = function (oficina) {
        return $http.post("http://localhost:8081/insert/garage", oficina);
    };

    var _listAll = function () {
        return $http.get("http://localhost:8081/garage/listAll");
    };

    return {
        listAll: _listAll,
        cadastroOficina: _cadastroOficina
    };
});