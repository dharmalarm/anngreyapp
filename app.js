(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router'
    ])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      demoApp
    ]);

  function demoApp($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('glide', {
        url: '/',
        templateUrl: 'glideindex.html',
        controller: 'GlideController',
        controllerAs: 'glide'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
