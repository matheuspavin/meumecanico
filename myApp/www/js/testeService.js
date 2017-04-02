angular.module("starter").factory("testeAPI", function ($http) {

	var _getCheque = function () {
		return $http.get("http://localhost:8081/consulta");
	};


	return {
		getCheque: _getCheque
	};
});