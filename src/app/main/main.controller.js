(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($routeParams) {
    var vm = this;

    vm.articlesType = $routeParams.articlesType;
    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    //
    // activate();
    //
    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }
    //
    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();
    //
    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();
