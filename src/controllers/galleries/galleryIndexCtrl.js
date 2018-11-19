function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/galleries'
  }).then(result => {
    $scope.allGalleries = result.data;
    // $scope.filteredGalleries = $scope.allGalleries;
  });

  // $scope.handleFilterSubmit = function() {
  //   console.log('Filter form submitted!', $scope.searchTerm);
  //   $scope.filteredGalleries = $scope.allGalleries.filter(gallery =>
  //     gallery.name.toLowerCase().startsWith($scope.searchTerm.toLowerCase())
  //   );
  // };
}

export default indexCtrl;
