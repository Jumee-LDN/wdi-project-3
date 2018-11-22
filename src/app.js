import angular from 'angular';
import '@uirouter/angularjs';
// NOTE: Flash messages!
import 'angular-flash-alert';
import 'angular-flash-alert/dist/angular-flash.min.css';
import 'bulma';
import Router from './config/router';
import 'satellizer';
import './scss/style.scss';
import mainCtrl from './controllers/mainCtrl';

// function Router($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('home', {
//       url: '/'
//     });
//   $urlRouterProvider.otherwise('/');
// }

angular.module('exhibition', ['ui.router', 'satellizer', 'ngFlash'])
  .config(Router)
  .controller('mainCtrl', mainCtrl)
  .config(function($authProvider){
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
