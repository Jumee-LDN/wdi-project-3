import exhibitionIndexCtrl from '../controllers/exhibitions/exhibitionIndexCtrl';
import exhibitionShowCtrl from '../controllers/exhibitions/exhibitionShowCtrl';
import galleryIndexCtrl from '../controllers/galleries/galleryIndexCtrl';
import galleryShowCtrl from '../controllers/galleries/galleryShowCtrl';

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
    })
    .state('galleryIndex', {
      templateUrl: './views/galleries/galleryIndex.html',
      url: '/galleries',
      controller: galleryIndexCtrl
    })
    .state('galleryShow', {
      templateUrl: './views/galleries/galleryShow.html',
      url: '/galleries/:id',
      controller: galleryShowCtrl
    });

}

export default Router;
