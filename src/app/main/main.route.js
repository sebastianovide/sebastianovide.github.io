(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/articles/:articlesType', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  }

})();
