angular.module("meuMecanico").factory("oficinaService", function ($http) {


    var _cadastroOficina = function (oficina) {
        return $http.post("http://192.168.0.109:8081/insert/garage", oficina);
    };

    var _listAll = function () {
        return $http.get("http://192.168.0.109:8081/garage/listAll");
    };

    var _findGarage = function () {
        return $http.get("http://192.168.0.109:8081/garage/findGarage");
    };

    var _editGarage = function (garage) {
        return $http.post("http://192.168.0.109:8081/garage/editGarage", garage);
    };

    var _findGarageById = function (obj) {
        return $http.post("http://192.168.0.109:8081/garage/findGarageById", obj);
    };

    return {
        listAll: _listAll,
        editGarage: _editGarage,
        findGarage: _findGarage,
        cadastroOficina: _cadastroOficina,
        findGarageById: _findGarageById
    };
});