import mapLib from '../lib/map';

function homeCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/exhibitions'
  }).then(result => {
    $scope.allExhibitions = result.data;
    $scope.topExhibitions = $scope.allExhibitions;
  });

  $http({
    method: 'GET',
    url: '/api/galleries'
  }).then(result => {
    console.log('This is result.data', result.data);
    $scope.galleries = result.data;
    mapLib.create('map-element', [51.515, -0.072], 14);
  });

  $scope.panMap = function(gallery) {
    console.log('this is latitude', gallery.latlgn.lat);
    console.log('this is longitude', gallery.latlgn.lgn);
    const lat = gallery.latlgn.lat
    const lgn = gallery.latlgn.lgn
    mapLib.panTo([lat, lgn]);
    mapLib.clearMarkers();
    console.log('this is....', [lat, lgn]);
    mapLib.addMarker([lat, lgn], `<strong>${gallery.name} 🏛 </strong>`);
  };

  $scope.panMapE = function(exhibition) {
    console.log('this is latitude', exhibition.gallery);
    console.log('this is longitude', exhibition.gallery.latlgn.lgn);
    const lat = exhibition.gallery.latlgn.lat
    const lgn = exhibition.gallery.latlgn.lgn
    mapLib.panTo([lat, lgn]);
    mapLib.clearMarkers();
    console.log('this is....', [lat, lgn]);
    mapLib.addMarker([lat, lgn], `<strong>${exhibition.name} at (the) ${exhibition.gallery.name}🏛 </strong>`);
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
