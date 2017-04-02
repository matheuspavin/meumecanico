angular.module('mecanico', ['ionic', 'ngSanitize', '$state'])

.controller('LoginCtrl', function($scope, $sce, $state) {
  	
  var ctrl = this;
  var user = {};

  ctrl.login = function (user){
   console.log('pikas', user);
    $state.go('app.cadastroOficina');
    
  };

 
});