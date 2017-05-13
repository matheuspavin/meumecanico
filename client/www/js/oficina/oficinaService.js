angular.module("meuMecanico").factory("oficinaService", function ($http) {


    var _cadastroOficina = function (oficina) {
        return $http.post("http://localhost:8081/insert/garage", oficina);
    };

    var _listAll = function () {
        return $http.get("http://localhost:8081/insert/garage");
    };

    return {
        listAll: _listAll,
    };
});