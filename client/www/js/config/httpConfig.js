angular.module('meuMecanico').config(["$httpProvider", function ($httpProvider) {
	$httpProvider.interceptors.push("tokenInterceptor");
	$httpProvider.interceptors.push("authenticationInterceptor");
}]);