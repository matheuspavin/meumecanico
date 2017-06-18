angular.module("meuMecanico").factory("clientService", function ($http) {


    var _cadastroClient = function (client) {
        return $http.post("http://192.168.0.109:8081/insert/client", client);
    };

    var _listAll = function () {
        return $http.get("http://192.168.0.109:8081/client/listAll");
    };

    var _findClient = function () {
        return $http.get("http://192.168.0.109:8081/client/findClient");
    };

    var _editClient = function (client) {
        return $http.post("http://192.168.0.109:8081/client/editClient", client);
    };

    return {
        listAll: _listAll,
        editClient: _editClient,
        findClient: _findClient,
        cadastroClient: _cadastroClient
    };
});