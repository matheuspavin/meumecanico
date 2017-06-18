angular.module('meuMecanico').factory("tokenInterceptor", ["$window", "$location", function ($window, $location) {
	return {
		request: function (config) {
			var token = $window.localStorage.token;
            if (token) {
                config.headers['x-access-token'] = token;
            }

			return config;
		},
		response: function (response) {
			return response;
		}
	};
}]);