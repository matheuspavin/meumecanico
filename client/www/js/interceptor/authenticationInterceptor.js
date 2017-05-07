angular.module('meuMecanico').factory("authenticationInterceptor", ["$rootScope", "$q", "$window", function ($rootScope, $q, $window) {
	return {
		responseError: function (rejection) {
			if (rejection.status === 401) {
				delete $window.localStorage.token;
				$rootScope.openLogin();
			}
			return $q.reject(rejection);
		}
	};
}]);