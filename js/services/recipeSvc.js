angular.module('app')
  .service('recipeSvc', function($http){

    this.getRandomRecipe = function(){
      var randInt = ~~(Math.random() * 40000) + 10000;
      return $http ({
        method: 'GET',
        url: `https://food2fork.com/api/get?rId=${randInt}&key=e0c76ddc318883839bde63f434e68776`
      })
    }

    //searchRecipes

    let recipeArr = [];

    this.searchRecipes = function(searchTerm){
      return $http({
        method: 'GET',
        url: `https://food2fork.com/api/search?key=e0c76ddc318883839bde63f434e68776&q=${searchTerm}`
      })
    }

    this.recipeById = function(id){
      return $http ({
        method: 'GET',
        url: `https://food2fork.com/api/get?rId=${id}&key=e0c76ddc318883839bde63f434e68776`
      })
    }


    // this.searchRecipes().then(function(response){
    //   for(let i = 0; i < response.data.length; i++){
    //     recipeArr.push(response.data[i]);
    //   }
    // })
    //
    // this.recipeArr = recipeArr;

  })
  // return $http ({
  //   method: 'GET',
  //   url: 'http://food2fork.com/api/search?q=shredded%20chicken&key=' + 'e0c76ddc318883839bde63f434e68776'
  // })
