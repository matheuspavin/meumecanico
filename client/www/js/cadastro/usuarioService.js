angular.module("meuMecanico").factory("usuarioService", function ($http) {

	/*	var _getCheque = function () {
			return $http.get("http://192.168.0.109:8081/consulta");
		};*/

	var _cadastroCliente = function (cliente) {
		return $http.post("http://192.168.0.109:8081/insert/customer", cliente);
	};

	return {
		cadastroCliente: _cadastroCliente
	};
});