import exhibitionIndexCtrl from '../controllers/exhibitions/exhibitionIndexCtrl';
import exhibitionShowCtrl from '../controllers/exhibitions/exhibitionShowCtrl';
import exhibitionNewCtrl from '../controllers/exhibitions/exhibitionNewCtrl';
import galleryIndexCtrl from '../controllers/galleries/galleryIndexCtrl';
import galleryShowCtrl from '../controllers/galleries/galleryShowCtrl';
import galleryNewCtrl from '../controllers/galleries/galleryNewCtrl';
import galleryEditCtrl from '../controllers/galleries/galleryEditCtrl';
import registerCtrl from '../controllers/auth/registerCtrl';
import loginCtrl from '../controllers/auth/loginCtrl';
import homeCtrl from '../controllers/homeCtrl';
import exhibitionEditCtrl from '../controllers/exhibitions/exhibitionEditCtrl';
// import mapCtrl from '../controllers/mapCtrl';

//INDIA:
function Router($stateProvider) {
  $stateProvider
    .state('login', {
      templateUrl: './views/auth/login.html',
      url: '/login',
      controller: loginCtrl
    })
    .state('register', {
      templateUrl: './views/auth/register.html',
      url: '/register',
      controller: registerCtrl
    })
    .state('home', {
      templateUrl: './views/home.html',
      url: '/',
      controller: homeCtrl
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
    })
    .state('galleryNew', {
      templateUrl: './views/galleries/galleryNew.html',
      url: '/galleries/new',
      controller: galleryNewCtrl
    })
    .state('galleryEdit', {
      templateUrl: './views/galleries/galleryEdit.html',
      url: '/galleries/:id/edit',
      controller: galleryEditCtrl
    })
    .state('exhibitionEdit', {
      templateUrl: './views/exhibitions/exhibitionEdit.html',
      url: '/exhibitions/:id/edit',
      controller: exhibitionEditCtrl
    })
    .state('exhibitionNew', {
      templateUrl: './views/exhibitions/exhibitionNew.html',
      url: '/galleries/:galleryId/new',
      controller: exhibitionNewCtrl
    })
//     .state('map', {
//       templateUrl: './views/map.html',
//       url: '/map',
//       controller: mapCtrl
//     });
// }
}

export default Router;
