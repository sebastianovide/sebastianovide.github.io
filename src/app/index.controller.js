/* global _ */

(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($location, $mdSidenav, $scope) {
    var vm = this;

    vm.menuItems = [
      { title: "Notes", contentTitle: "Random notes", pageUrl: "/#/articles/note", icon: "assignment"},
      { title: "Pocs", contentTitle: "Proof of Concepts", pageUrl: "/#/articles/poc", icon: "extension"},
      { title: "About", contentTitle: "The Lean Seed", pageUrl: "/#/about", icon: "face"}
    ];
    vm.toggleSidenav = toggleSidenav;

    $scope.$on("$routeChangeSuccess", function handleRouteChangeEvent() {
      vm.menuItemSelected = _.chain(vm.menuItems)
        .find(function(menuItem){
          return _.startsWith("/#" + $location.path(),menuItem.pageUrl);
        })
        .value();
    });

    function toggleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    }
  }
})();
