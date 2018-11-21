function exhibitionIndexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/exhibitions'
  }).then(result => {
    $scope.allExhibitions = result.data;
    $scope.filteredExhibitions = $scope.allExhibitions;
  });
  // $http({
  //   method: 'GET',
  //   url: '/api/galleries'
  // }).then(result => {
  //   $scope.allGalleries = result.data;
  //   $scope.filteredGalleries = $scope.allGalleries;
  // });

  $scope.handleFilterSubmit = function (){
    $scope.filteredExhibitions = $scope.allExhibitions.filter(exhibition => exhibition.name.toLowerCase().includes($scope.searchTerm.toLowerCase()));
  };
}

export default exhibitionIndexCtrl;
