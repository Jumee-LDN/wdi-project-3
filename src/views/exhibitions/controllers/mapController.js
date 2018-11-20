import mapLib from '../lib/map';

function mapController($state, $scope, $http) {
  // This runs once, when the state is first loaded:
  $http({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/regionalbloc/eu'
  }).then(result => {
    console.log('This is result.data', result.data);
    $scope.countries = result.data;
    mapLib.create('map-element', [51.515, -0.072], 6);
  });
  // Functions
  $scope.panMap = function(country) {
    mapLib.panTo(country.latlng);
    mapLib.clearMarkers();
    mapLib.addMarker(country.latlng, `<strong>${country.name}</strong><img src=${country.flag} />`);
  };

  $scope.findPlaces = function() {
    // Make a request to nominatim, using the current search term:
    $http({
      method: 'GET',
      url: `https://nominatim.openstreetmap.org/search/${$scope.searchTerm}?format=json&limit=5`
    }).then(result => {
      // result.data now has the top 5 results.
      $scope.searchResults = result.data;
    });
  };

  $scope.goTo = function(place) {
    console.log('Clicked on', place);
    // Clear the search text:
    $scope.searchTerm = null;
    mapLib.panTo([place.lat, place.lon]);
    mapLib.addMarker([place.lat, place.lon], place.display_name);
    $scope.searchResults = null;
  };

  $scope.findUser = function() {
    navigator.geolocation.getCurrentPosition(function(result) {
      mapLib.panTo([result.coords.latitude, result.coords.longitude]);
      mapLib.addMarker([result.coords.latitude, result.coords.longitude], '🌟');
    });
  };
}

export default mapController;
