import exhibitionIndexCtrl from '../controllers/exhibitions/exhibitionIndexCtrl';
import exhibitionShowCtrl from '../controllers/exhibitions/exhibitionShowCtrl';

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
    })
    //INDIA:
    .state('exhibitionShow', {
      templateUrl: './views/exhibitions/exhibitionShow.html',
      url: '/exhibitions/:id',
      controller: exhibitionShowCtrl
    });
}

//INDIA:
export default Router;
