angular.module('app')
  .controller('recipeIdCtrl', function($scope, $stateParams, recipeSvc){
    $scope.recipe = {};
    $scope.getRecipe = function(){

      recipeSvc.recipeById($stateParams.id)
      .then(function(response){
        console.log(response.data)
        $scope.recipe = response.data;
      })
    }
    $scope.getRecipe();
  })
