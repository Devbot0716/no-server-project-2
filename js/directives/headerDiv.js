angular.module('app')
  .directive('headerDiv', function(){
    return {
      templateUrl: './views/header.html',
      controller: 'recipeCtrl'
    }
  })
