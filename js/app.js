angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home') //default page

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './views/home.html',
        controller: 'recipeCtrl'
      })

      .state('recipes', {
        url: '/recipes',
        templateUrl: './views/recipes.html',
        controller: 'recipeCtrl'
      })

      .state('recipe', {
        url: '/recipe/:id',
        templateUrl: './views/recipeId.html',
        controller: 'recipeIdCtrl'
      })

  })
