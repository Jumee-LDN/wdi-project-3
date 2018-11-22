// import mapLib from '../lib/map';
//
// function mapCtrl($scope, $state, $http){
//   $http({
//     method: 'GET',
//     url: '/api/galleries'
//   }).then(result => {
//     console.log('This is result.data', result.data);
//     $scope.galleries = result.data;
//     mapLib.create('map-element', [51.515, -0.072], 14);
//   });
//
//   $scope.panMap = function(gallery) {
//     console.log('this is latitude', gallery.latlgn.lat);
//     console.log('this is longitude', gallery.latlgn.lgn);
//     const lat = gallery.latlgn.lat
//     const lgn = gallery.latlgn.lgn
//     mapLib.panTo([lat, lgn]);
//     mapLib.clearMarkers();
//     console.log('this is....', [lat, lgn]);
//     mapLib.addMarker([lat, lgn], `<strong>${gallery.name} 🏛 </strong>`);
//   };
//
//   $scope.findPlaces = function() {
//     $http({
//       method: 'GET',
//       url: `https://nominatim.openstreetmap.org/search/${$scope.searchTerm}?format=json&limit=5`
//     }).then(result => {
//       $scope.searchResults = result.data;
//     });
//   };
//
//   $scope.goTo = function(place) {
//     console.log('Clicked on', place);
//     $scope.searchTerm = null;
//     mapLib.panTo([place.lat, place.lon]);
//     mapLib.addMarker([place.lat, place.lon], place.display_name);
//     $scope.searchResults = null;
//   };
//
// }
//
//
// export default mapCtrl;
