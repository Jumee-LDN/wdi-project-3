import exhibitionIndexCtrl from '../controllers/exhibitions/exhibitionIndexCtrl';

//INDIA:
function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('exhibitionIndex', {
      templateUrl: './views/exhibitions/exhibitionIndex.html',
      url: '/exhibitions',
      controller: exhibitionIndexCtrl
    });
}

export default Router;
