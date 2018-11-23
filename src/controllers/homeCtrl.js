import mapLib from '../lib/map';

function homeCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: '/api/exhibitions'
  }).then(result => {
    $scope.allExhibitions = result.data;
    $scope.topExhibitions = $scope.allExhibitions;
  });

  function popUpClick(exhibition){
    console.log('this is EXID', exhibition._id);
    $state.go('exhibitionShow', { id: exhibition._id});
  }

  function galleryPopUpClick(gallery){
    console.log('this is gallery id', gallery._id);
    $state.go('galleryShow', { id: gallery._id});
  }

  $http({
    method: 'GET',
    url: '/api/galleries'
  }).then(result => {
    console.log('This is result.data', result.data);
    $scope.galleries = result.data;
    mapLib.create('map-element', [51.515, -0.072], 14);
  });

  $scope.featuredExhibitions = function(exhibition){
    return exhibition.rating > 6;
  };

  $scope.panMap = function(gallery) {
    const lat = gallery.latlgn.lat;
    const lgn = gallery.latlgn.lgn;
    mapLib.panTo([lat, lgn]);
    mapLib.clearMarkers();
    console.log('this is....', [lat, lgn]);
    const myDiv = document.createElement('div');
    myDiv.innerHTML = `${gallery.name}🏛`;
    myDiv.addEventListener('click', () => galleryPopUpClick(gallery));
    mapLib.addMarker([lat, lgn], myDiv);
  };

  $scope.panMapE = function(exhibition) {
    console.log('this is latitude', exhibition.gallery);
    console.log('this is longitude', exhibition.gallery.latlgn.lgn);
    console.log('this is ID', exhibition);
    const lat = exhibition.gallery.latlgn.lat;
    const lgn = exhibition.gallery.latlgn.lgn;
    mapLib.panTo([lat, lgn]);
    mapLib.clearMarkers();
    console.log('this is....', [lat, lgn]);
    const myDiv = document.createElement('div');
    myDiv.innerHTML = `${exhibition.name} at (the) ${exhibition.gallery.name}🏛`;
    myDiv.addEventListener('click', () => popUpClick(exhibition));
    mapLib.addMarker([lat, lgn], myDiv);
  };

  $scope.findPlaces = function() {
    $http({
      method: 'GET',
      url: `https://nominatim.openstreetmap.org/search/${$scope.searchTerm}?format=json&limit=5`
    }).then(result => {
      $scope.searchResults = result.data;
    });
  };

  $scope.goTo = function(place) {
    console.log('Clicked on', place);
    $scope.searchTerm = null;
    mapLib.panTo([place.lat, place.lon]);
    mapLib.addMarker([place.lat, place.lon], place.display_name);
    $scope.searchResults = null;
  };

  $scope.findUser = function() {
    navigator.geolocation.getCurrentPosition(function(result) {
      mapLib.panTo([result.coords.latitude, result.coords.longitude]);
      mapLib.addMarker([result.coords.latitude, result.coords.longitude], 'This is you 🐥');
    });
  };
}


export default homeCtrl;
