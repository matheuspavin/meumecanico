angular.module('oficina', ['ionic', 'ngSanitize'])

.controller('OficinaCtrl', function($scope, $sce) {
  $scope.myTitle = 'Template';
  	
  var ctrl = this;

  ctrl.cadastro = function (){
    console.log('pikas');
  };

 
});