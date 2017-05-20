angular.module("meuMecanico").factory("oficinaService", function ($http) {


    var _cadastroOficina = function (oficina) {
        return $http.post("http://localhost:8081/insert/garage", oficina);
    };

    var _listAll = function () {
        return $http.get("http://localhost:8081/garage/listAll");
    };

    var _findGarage = function () {
        return $http.get("http://localhost:8081/garage/findGarage");
    };

    var _editGarage = function (garage) {
        return $http.post("http://localhost:8081/garage/editGarage", garage);
    };

    return {
        listAll: _listAll,
        editGarage: _editGarage,
        findGarage: _findGarage,
        cadastroOficina: _cadastroOficina
    };
});