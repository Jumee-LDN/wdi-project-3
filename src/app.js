import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';
import Router from './config/router';
import 'satellizer';
import './scss/main.scss';
import mainCtrl from './controllers/mainCtrl';

// function Router($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('home', {
//       url: '/'
//     });
//   $urlRouterProvider.otherwise('/');
// }

angular.module('exhibition', ['ui.router', 'satellizer'])
  .config(Router)
  .controller('mainCtrl', mainCtrl)
  .config(function($authProvider){
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
