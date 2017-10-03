angular.module('app')
  .controller('recipeCtrl', function($scope, recipeSvc){

    $scope.getRandomRecipe = function(){
      recipeSvc.getRandomRecipe().then(function(recipe){
        // console.log(recipe);
        $scope.recipe = recipe.data.recipe;
      })
    }

    $scope.selectRecipe = function(result){
      console.log(result);
      $scope.recipe = result;
    }
    // $scope.getRandomRecipe(); doesnt need to be invoked because we want that to show AFTER we've clicked the button

    $scope.searchRecipes = function(searchTerm){
      recipeSvc.searchRecipes(searchTerm).then(function(response){
        $scope.searchResults = response.data.recipes;
        console.log($scope.searchResults)
      })
    }
  });
