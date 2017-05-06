angular.module("meuMecanico").factory("usuarioService", function ($http) {

	/*	var _getCheque = function () {
			return $http.get("http://localhost:8081/consulta");
		};*/

	var _cadastroCliente = function (cliente) {
		return $http.post("http://localhost:8081/insert/customer", cliente);
	};

	var _cadastroOficina = function (oficina) {
		return $http.post("http://localhost:8081/insert/garage", oficina);
	};

	/*	var _delCheque = function (delCheque) {
			return $http.post("http://localhost:8081/deletaCheque", delCheque);
		};
	
		var _loadCliente = function () {
			return $http.get("http://localhost:8081/consultaCliente");
		};*/

	return {
		cadastroCliente: _cadastroCliente,
		cadastroOficina: _cadastroOficina
	};
});