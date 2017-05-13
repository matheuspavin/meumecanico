angular.module("meuMecanico").factory("usuarioService", function ($http) {

	/*	var _getCheque = function () {
			return $http.get("http://localhost:8081/consulta");
		};*/

	var _cadastroCliente = function (cliente) {
		return $http.post("http://localhost:8081/insert/customer", cliente);
	};

	return {
		cadastroCliente: _cadastroCliente
	};
});