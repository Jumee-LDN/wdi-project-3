import angular from 'angular';
import '@uirouter/angularjs';

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/'
    });
  $urlRouterProvider.otherwise('/');
}

angular.module('yourAppName', ['ui.router'])
  .config(Router);
